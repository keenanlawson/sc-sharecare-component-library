// const AccordionContext = require('./accordions/accordion.context');
// const AccordionItemContext = require('./accordions/accordion-item.context');
// const AvatarContext = require('./avatars/avatar.context');
// const BadgeContext = require('./badges/badge.context');
// const BannerContext = require('./banners/banner.context');
// const BreadcrumbBarContext = require('./breadcrumbs/breadcrumb-bar.context');
// const BreadcrumbContext = require('./breadcrumbs/breadcrumb.context');
// const ButtonContext = require('./buttons/button.context');
// const ButtonLabelContext = require('./buttons/button-label.context');
// const ButtonLinkContext = require('./buttons/button-link.context');
// const CardContext = require('./cards/card.context');
// const CardFooterContext = require('./cards/card-footer.context');
// const CardHeaderContext = require('./cards/card-header.context');
// const CardMediaContext = require('./cards/card-media.context');
// const CardTextContext = require('./cards/card-text.context');
// const CheckboxContext = require('./inputs/checkbox.context');
// const CheckboxGroupContext = require('./inputs/checkbox-group.context');
// const ChipContext = require('./chips/chip.context');
// const DrawerContext = require('./drawers/drawer.context');
// const DrawerTriggerContext = require('./drawers/drawer-trigger.context');
// const FontIconContext = require('./icons/font-icon.context');
// const GlobalSearchContext = require('./global-search/global-search.context');
// const ImageContext = require('./images/image.context');
// const InputContext = require('./inputs/input.context');
// const LinkContext = require('./links/link.context.js');
// const ModalContext = require('./modals/modal.context');
// const NavigationContext = require('./navigation-bars/navigation.context');
// const NavigationTabContext = require('./navigation-bars/navigation-tab.context');
// const PageFooterContext = require('./page-footers/page-footer.context');
// const PageHeaderContext = require('./page-headers/page-header.context');
// const PageSectionContext = require('./page-containers/page-section.context');
// const PaginationContext = require('./paging/pagination.context');
// const PaginationPageContext = require('./paging/pagination-page.context');
// const ProgressBarContext = require('./progress-bars/progress-bar.context');
// const RadioContext = require('./inputs/radio.context');
// const RadioGroupContext = require('./inputs/radio-group.context');
// const SelectContext = require('./inputs/select.context');
// const SelectOptionContext = require('./inputs/select-option.context');
// const SiteAboutBarContext = require('./site-about-bar/site-about-bar.context');
// const SiteAboutLinksContext = require('./site-about-links/site-about-links.context');
// const SiteDisclaimerContext = require('./site-disclaimer/site-disclaimer.context');
// const SiteDisclaimerBarContext = require('./site-disclaimer-links/site-disclaimer-links.context');
// const SiteDisclaimerLinksContext = require('./site-disclaimer-bar/site-disclaimer-bar.context');
// const SiteFadBarContext = require('./site-fad-bar/site-fad-bar.context');
// const SiteLogosContext = require('./site-logos/site-logos.context');
// const SiteLogosBarContext = require('./site-logos-bar/site-logos-bar.context');
// const SiteNavigationContext = require('./site-navigation/site-navigation.context');
// const SiteNavigationBarContext = require('./site-navigation-bar/site-navigation-bar.context');
// const SiteSearchBarContext = require('./site-search-bar/site-search-bar.context');
// const SocialIconsContext = require('./social-icons/social-icons.context.js');
// const SVGIconContext = require('./icons/svg-icon.context');
// const TitleBarContext = require('./title-bars/title-bar.context');
//
// const ComponentFactory = {
//
//     createComponent(type, options = {}) {
//         const baseComponentOptions = this.components[type]();
//
//         for (const key in baseComponentOptions) {
//             if (baseComponentOptions.hasOwnProperty(key) && options.hasOwnProperty(key)) {
//                 if (baseComponentOptions[key] instanceof Array && options[key] instanceof Array && options[key].length) {
//                     baseComponentOptions[key] = baseComponentOptions[key].concat(options[key])
//                 }
//             }
//         }
//
//         return Object.assign({}, baseComponentOptions, options);
//     },
//
//     components: {
//         accordion: AccordionContext,
//         accordionItem: AccordionItemContext,
//         avatar: AvatarContext,
//         badge: BadgeContext,
//         banner: BannerContext,
//         breadcrumbBar: BreadcrumbBarContext,
//         breadcrumb: BreadcrumbContext,
//         button: ButtonContext,
//         buttonLabel: ButtonLabelContext,
//         buttonLink: ButtonLinkContext,
//         card: CardContext,
//         cardFooter: CardFooterContext,
//         cardHeader: CardHeaderContext,
//         cardMedia: CardMediaContext,
//         cardText: CardTextContext,
//         checkbox: CheckboxContext,
//         checkboxGroup: CheckboxGroupContext,
//         chip: ChipContext,
//         drawer: DrawerContext,
//         drawerTrigger: DrawerTriggerContext,
//         fontIcon: FontIconContext,
//         globalSearch: GlobalSearchContext,
//         image: ImageContext,
//         input: InputContext,
//         link: LinkContext,
//         modal: ModalContext,
//         navigation: NavigationContext,
//         navigationTab: NavigationTabContext,
//         pageFooter: PageFooterContext,
//         pageHeader: PageHeaderContext,
//         pageSection: PageSectionContext,
//         pagination: PaginationContext,
//         paginationPage: PaginationPageContext,
//         progressBar: ProgressBarContext,
//         radio: RadioContext,
//         radioGroup: RadioGroupContext,
//         select: SelectContext,
//         selectOption: SelectOptionContext,
//         siteAboutBar: SiteAboutBarContext,
//         siteAboutLinks: SiteAboutLinksContext,
//         siteDisclaimer: SiteDisclaimerContext,
//         siteDisclaimerLinks: SiteDisclaimerLinksContext,
//         siteDisclaimerBar: SiteDisclaimerBarContext,
//         siteFadBar: SiteFadBarContext,
//         siteLogos: SiteLogosContext,
//         siteLogosBar: SiteLogosBarContext,
//         siteNavigation: SiteNavigationContext,
//         siteNavigationBar: SiteNavigationBarContext,
//         siteSearchBar: SiteSearchBarContext,
//         socialIcons: SocialIconsContext,
//         svgIcon: SVGIconContext,
//         titleBar: TitleBarContext
//     }
// };
//
// module.exports = ComponentFactory;