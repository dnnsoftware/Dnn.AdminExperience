﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using Dnn.PersonaBar.Pages.Services.Dto;
using Dnn.PersonaBar.Themes.Components;
using Dnn.PersonaBar.Themes.Components.DTO;
using DotNetNuke.Common;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Security.Permissions;
using DotNetNuke.Services.FileSystem;

namespace Dnn.PersonaBar.Pages.Components
{
    public static class Converters
    {
        public static T ConvertToPageItem<T>(TabInfo tab, IEnumerable<TabInfo> portalTabs) where T : PageItem, new()
        {
            return new T
            {
                Id = tab.TabID,
                Name = tab.LocalizedTabName,
                Url = tab.FullUrl,
                ChildrenCount = portalTabs?.Count(ct => ct.ParentId == tab.TabID) ?? 0,
                Status = GetTabStatus(tab),
                ParentId = tab.ParentId,
                Level = tab.Level,
                IsSpecial = TabController.IsSpecialTab(tab.TabID, PortalSettings.Current),
                TabPath = tab.TabPath.Replace("//", "/"),
                PageType = GetPageType(tab.Url),
                CanViewPage = TabPermissionController.CanViewPage(tab),
                LastModifiedOnDate = tab.LastModifiedOnDate.ToString("MM/dd/yyyy h:mm:ss tt", CultureInfo.CreateSpecificCulture(tab.CultureCode ?? "en-US")),
                FriendlyLastModifiedOnDate = tab.LastModifiedOnDate.ToString("MM/dd/yyyy h:mm:ss tt"),
                Tags = tab.Terms.Select(t => t.Name).ToArray()
        };
        }
        
        public static ModuleItem ConvertToModuleItem(ModuleInfo module) => new ModuleItem
        {
            Id = module.ModuleID,
            Title = module.ModuleTitle,
            FriendlyName = module.DesktopModule.FriendlyName,
            EditSettingUrl = GetModuleEditSettingUrl(module)
        };

        private static string GetModuleEditSettingUrl(ModuleInfo module)
        {
            return Globals.NavigateURL(module.TabID, PortalSettings.Current, "Module", "ModuleId=" + module.ModuleID);
        }

        public static T ConvertToPageSettings<T>(TabInfo tab) where T: PageSettings, new()
        {
            if (tab == null)
            {
                return null;
            }

            var pageManagementController = PageManagementController.Instance;

            var description = !string.IsNullOrEmpty(tab.Description) ? tab.Description : PortalSettings.Current.Description;
            var keywords = !string.IsNullOrEmpty(tab.KeyWords) ? tab.KeyWords : PortalSettings.Current.KeyWords;
            var pageType = GetPageType(tab.Url);
            
            var file = GetFileRedirection(tab.Url);
            var fileId = file?.FileId;
            var fileUrl = file?.Folder;
            var fileName = file?.FileName;
            var themeFile = GetThemeFileFromSkinSrc(tab.SkinSrc);

            return new T
            {
                TabId = tab.TabID,
                Name = tab.TabName,
                AbsoluteUrl = tab.FullUrl,
                LocalizedName = tab.LocalizedTabName,
                Title = tab.Title,
                Description = description,
                Keywords = keywords,
                Tags = string.Join(",", from t in tab.Terms select t.Name),
                Alias = PortalSettings.Current.PortalAlias.HTTPAlias,
                Url = pageManagementController.GetTabUrl(tab),
                ExternalRedirection = pageType == "url" ? tab.Url : null,
                FileIdRedirection = pageType == "file" ? fileId : null,
                FileFolderPathRedirection = pageType == "file" ? fileUrl : null,
                FileNameRedirection = pageType == "file" ? fileName : null,
                ExistingTabRedirection = pageType == "tab" ? tab.Url : null,
                Created = pageManagementController.GetCreatedInfo(tab),
                Hierarchy = pageManagementController.GetTabHierarchy(tab),
                Status = GetTabStatus(tab),
                PageType = pageType,
                CreatedOnDate = tab.CreatedOnDate,
                IncludeInMenu = tab.IsVisible,
                DisableLink = tab.DisableLink,
                CustomUrlEnabled = !tab.IsSuperTab && (Config.GetFriendlyUrlProvider() == "advanced"),
                StartDate = tab.StartDate != Null.NullDate ? tab.StartDate : (DateTime?) null,
                EndDate = tab.EndDate != Null.NullDate ? tab.EndDate : (DateTime?) null,
                IsSecure = tab.IsSecure,
                AllowIndex = AllowIndex(tab),
                CacheProvider = (string)tab.TabSettings["CacheProvider"],
                CacheDuration = CacheDuration(tab),
                CacheIncludeExclude = CacheIncludeExclude(tab),
                CacheIncludeVaryBy = (string)tab.TabSettings["IncludeVaryBy"],
                CacheExcludeVaryBy = (string)tab.TabSettings["ExcludeVaryBy"],
                CacheMaxVaryByCount = MaxVaryByCount(tab),
                PageHeadText = tab.PageHeadText,
                SiteMapPriority = tab.SiteMapPriority,
                PermanentRedirect = tab.PermanentRedirect,
                LinkNewWindow = LinkNewWindow(tab),
                PageStyleSheet = (string)tab.TabSettings["CustomStylesheet"],
                ThemeName = themeFile?.ThemeName,
                ThemeLevel = (int)(themeFile?.Level ?? ThemeLevel.Site),
                SkinSrc = tab.SkinSrc,
                ContainerSrc = tab.ContainerSrc,
                HasChild = pageManagementController.TabHasChildren(tab),
                ParentId = tab.ParentId
            };
        }
        
        private static ThemeFileInfo GetThemeFileFromSkinSrc(string skinSrc)
        {
            if (string.IsNullOrWhiteSpace(skinSrc))
            {
                skinSrc = PortalSettings.Current.DefaultPortalSkin;
            }

            var themeController = ThemesController.Instance;
            var layout = themeController.GetThemeFile(PortalSettings.Current, skinSrc, ThemeType.Skin);
            return layout;
        }

        private static IFileInfo GetFileRedirection(string tabUrl)
        {
            if (tabUrl == null || !tabUrl.StartsWith("FileId="))
            {
                return null;
            }

            int fileRedirectionId;
            if (int.TryParse(tabUrl.Substring(7), out fileRedirectionId))
            {
                return FileManager.Instance.GetFile(fileRedirectionId);
            }
            return null;
        }

        private static int? CacheDuration(TabInfo tab)
        {
            int i;
            var duration = (int?)null;

            if (tab.TabSettings["CacheDuration"] != null && int.TryParse((string) tab.TabSettings["CacheDuration"], out i))
            {
                duration = i;
            }

            return duration;
        }

        private static bool? CacheIncludeExclude(TabInfo tab)
        {
            return tab.TabSettings["CacheIncludeExclude"] != null ? (string)tab.TabSettings["CacheIncludeExclude"] == "1" : (bool?)null;
        }

        private static bool LinkNewWindow(TabInfo tab)
        {
            return tab.TabSettings["LinkNewWindow"] != null && (string)tab.TabSettings["LinkNewWindow"] == "True";
        }

        private static int? MaxVaryByCount(TabInfo tab)
        {
            int i;
            var maxVaryBy = (int?)null;

            if (tab.TabSettings["MaxVaryByCount"] != null && int.TryParse((string)tab.TabSettings["MaxVaryByCount"], out i))
            {
                maxVaryBy = i;
            }

            return maxVaryBy;
        }

        private static bool AllowIndex(TabInfo tab)
        {
            bool allowIndex;
            return !tab.TabSettings.ContainsKey("AllowIndex") || !bool.TryParse(tab.TabSettings["AllowIndex"].ToString(), out allowIndex) || allowIndex;
        }

        private static string GetPageType(string tabUrl)
        {
            return Globals.GetURLType(tabUrl).ToString().ToLower();
        }

        // TODO: Refactor to use enum
        private static string GetTabStatus(TabInfo tab)
        {
            if (tab.DisableLink)
            {
                return "Disabled";
            }

            return tab.IsVisible ? "Visible" : "Hidden";
        }
    }
}