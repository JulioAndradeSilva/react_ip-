/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Accordion from 'components/doc-components/Accordion';
import Alerts from 'components/doc-components/Alerts';
import Badges from 'components/doc-components/Badges';
import Breadcrumbs from 'components/doc-components/Breadcrumb';
import Buttons from 'components/doc-components/Buttons';
import CalendarExample from 'components/doc-components/CalendarExample';
import Cards from 'components/doc-components/Cards';
import Dropdowns from 'components/doc-components/Dropdowns';
import ListGroups from 'components/doc-components/ListGroups';
import Modals from 'components/doc-components/Modals';
import Offcanvas from 'components/doc-components/Offcanvas';
import Pagination from 'components/doc-components/Pagination';
import BasicProgressBar from 'components/doc-components/ProgressBar';
import Spinners from 'components/doc-components/Spinners';
import Toasts from 'components/doc-components/Toasts';
import Avatar from 'components/doc-components/Avatar';
import Image from 'components/doc-components/Image';
import Tooltips from 'components/doc-components/Tooltips';
import Popovers from 'components/doc-components/Popovers';
import Figures from 'components/doc-components/Figures';
import Hoverbox from 'components/doc-components/Hoverbox';
import Tables from 'components/doc-components/Tables';
import FormControl from 'components/doc-components/FormControl';
import InputGroup from 'components/doc-components/InputGroup';
import Select from 'components/doc-components/Select';
import Checks from 'components/doc-components/Checks';
import Range from 'components/doc-components/Range';
import FormLayout from 'components/doc-components/FormLayout';
import FloatingLabels from 'components/doc-components/FloatingLabels';
import FormValidation from 'components/doc-components/FormValidation';
import BootstrapCarousel from 'components/doc-components/BootstrapCarousel';
import SlickCarousel from 'components/doc-components/SlickCarousel';
import Navs from 'components/doc-components/Navs';
import Navbars from 'components/doc-components/Navbars';
import Tabs from 'components/doc-components/Tabs';
import Collapse from 'components/doc-components/Collapse';
import CountUp from 'components/doc-components/CountUp';
import Embed from 'components/doc-components/Embed';
import Background from 'components/doc-components/Backgrounds';
import Search from 'components/doc-components/Search';
import VerticalNavbar from 'components/doc-components/VerticalNavbar';
import NavBarTop from 'components/doc-components/NavBarTop';
import ComboNavbar from 'components/doc-components/ComboNavbar';
import TypedText from 'components/doc-components/TypedText';
import FileUploader from 'components/doc-components/FileUploader';
import Borders from 'components/utilities/Borders';
import Colors from 'components/utilities/Colors';
import ColoredLinks from 'components/utilities/ColoredLinks';
import Display from 'components/utilities/Display';
import Visibility from 'components/utilities/Visibility';
import StretchedLink from 'components/utilities/StretchedLink';
import Float from 'components/utilities/Float';
import Position from 'components/utilities/Position';
import Spacing from 'components/utilities/Spacing';
import Sizing from 'components/utilities/Sizing';
import TextTruncation from 'components/utilities/TextTruncation';
import Typography from 'components/utilities/Typography';
import VerticalAlign from 'components/utilities/VerticalAlign';
import Flex from 'components/utilities/Flex';
import Grid from 'components/utilities/Grid';
import WizardForms from 'components/doc-components/WizardForms';
import GettingStarted from 'components/documentation/GettingStarted';
import Configuration from 'components/documentation/Configuration';
import DarkMode from 'components/documentation/DarkMode';
import Plugins from 'components/documentation/Plugins';
import Styling from 'components/documentation/Styling';
import DesignFile from 'components/documentation/DesignFile';
import Starter from 'components/pages/Starter';
import routes from 'routes/routes';
import { flatRoutes } from 'helpers/utils';
import ComingSoon from 'components/pages/ComingSoon';
import AnimatedIcons from 'components/doc-components/AnimatedIcons';
import DatePicker from 'components/doc-components/DatePicker';
import FontAwesome from 'components/doc-components/FontAwesome';
import Changelog from 'components/documentation/change-log/ChangeLog';
import Analytics from 'components/dashboards/analytics';
import Crm from 'components/dashboards/crm';
import Saas from 'components/dashboards/saas';
import ECommerce from 'components/dashboards/e-commerce';
import Profile from 'components/pages/user/profile/Profile';
import Associations from 'components/pages/asscociations/Associations';
import Followers from 'components/app/social/followers/Followers';
import Notifications from 'components/app/social/notifications/Notifications';
import ActivityLog from 'components/app/social/activity-log/ActivityLog';
import Settings from 'components/pages/user/settings/Settings';
import Feed from 'components/app/social/feed/Feed';
import Placeholder from 'components/doc-components/Placeholder';
import Lightbox from 'components/doc-components/Lightbox';
import AdvanceTableExamples from 'components/doc-components/AdvanceTableExamples';
import ModalAuth from 'components/authentication/modal/ModalAuth';
import Calendar from 'components/app/calendar/Calendar';
import FaqAlt from 'components/pages/faq/faq-alt/FaqAlt';
import FaqBasic from 'components/pages/faq/faq-basic/FaqBasic';
import FaqAccordion from 'components/pages/faq/faq-accordion/FaqAccordion';
import PrivacyPolicy from 'components/pages/miscellaneous/privacy-policy/PrivacyPolicy';
import InvitePeople from 'components/pages/miscellaneous/invite-people/InvitePeople';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import PricingAlt from 'components/pages/pricing/pricing-alt/PricingAlt';
import Invoice from 'components/app/e-commerce/Invoice';
import Billing from 'components/app/e-commerce/billing/Billing';
import Checkout from 'components/app/e-commerce/checkout/Checkout';
import ShoppingCart from 'components/app/e-commerce/cart/ShoppingCart';
import CustomersDetails from 'components/app/e-commerce/customers-details/CustomersDetails';
import OrderDetails from 'components/app/e-commerce/orders/order-details/OrderDetails';
import Products from 'components/app/e-commerce/product/Products';
import ProductDetails from 'components/app/e-commerce/product/product-details/ProductDetails';
import Orders from 'components/app/e-commerce/orders/order-list/Orders';
import Customers from 'components/app/e-commerce/customers/Customers';
import CreateEvent from 'components/app/events/create-an-event/CreateEvent';
import EventList from 'components/app/events/event-list/EventList';
import EventDetail from 'components/app/events/event-detail/EventDetail';
import EmailDetail from 'components/app/email/email-detail/EmailDetail';
import Compose from 'components/app/email/compose/Compose';
import Inbox from 'components/app/email/inbox/Inbox';
import EmailProvider from 'components/app/email/EmailProvider';
import Rating from 'components/doc-components/Rating';
import AdvanceSelect from 'components/doc-components/AdvanceSelect';
import Editor from 'components/doc-components/Editor';
import Chat from 'components/app/chat/Chat';
import Management from 'components/dashboards/project-management';
import Kanban from 'components/app/kanban/Kanban';
import DraggableExample from 'components/doc-components/DraggableExample';
import LineCharts from 'components/doc-components/charts-example/echarts/line-charts';
import BarCharts from 'components/doc-components/charts-example/echarts/bar-charts';
import CandlestickCharts from 'components/doc-components/charts-example/echarts/candlestick-charts';
import GeoMaps from 'components/doc-components/charts-example/echarts/geo-map';
import ScatterCharts from 'components/doc-components/charts-example/echarts/scatter-charts';
import PieCharts from 'components/doc-components/charts-example/echarts/pie-charts';
import RadarCharts from 'components/doc-components/charts-example/echarts/radar-charts/Index';
import HeatmapCharts from 'components/doc-components/charts-example/echarts/heatmap-chart';
import Chartjs from 'components/doc-components/charts-example/chartjs';
import HowToUse from 'components/doc-components/charts-example/echarts/HowToUse';
import GoogleMapExample from 'components/doc-components/GoogleMapExample';
import LeafletMapExample from 'components/doc-components/LeafletMapExample';
import CookieNoticeExample from 'components/doc-components/CookieNoticeExample';
import Scrollbar from 'components/doc-components/Scrollbar';
import Scrollspy from 'components/doc-components/Scrollspy';
import ReactIcons from 'components/doc-components/ReactIcons';
import ReactPlayerExample from 'components/doc-components/ReactPlayerExample';
import EmojiMartExample from 'components/doc-components/EmojiMart';
import TreeviewExample from 'components/doc-components/TreeviewExample';
import Timeline from 'components/doc-components/Timeline';
import Widgets from 'widgets/Widgets';

const inActiveRoutes = flatRoutes(routes).filter(route => !route.active);

const EmailRoutes = ({ match: { url } }) => (
  <EmailProvider>
    <Switch>
      <Route path={`${url}/email-detail`} exact component={EmailDetail} />
      <Route path={`${url}/inbox`} exact component={Inbox} />
      <Route path={`${url}/compose`} exact component={Compose} />
      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  </EmailProvider>
);
const ECommerceRoutes = ({ match: { url } }) => (
  <Switch>
    <Route
      path={`${url}/orders/order-details`}
      exact
      component={OrderDetails}
    />
    <Route path={`${url}/orders/order-list`} exact component={Orders} />
    <Route path={`${url}/invoice`} exact component={Invoice} />
    <Route path="/e-commerce/billing" exact component={Billing} />
    <Route path="/e-commerce/checkout" exact component={Checkout} />
    <Route path="/e-commerce/shopping-cart" exact component={ShoppingCart} />
    <Route path="/e-commerce/customers" exact component={Customers} />
    <Route
      path="/e-commerce/customer-details"
      exact
      component={CustomersDetails}
    />
    <Route
      path={`${url}/product/product-details/:productId`}
      exact
      component={ProductDetails}
    />
    <Route
      path={`${url}/product/product-details/`}
      exact
      component={ProductDetails}
    />
    <Route
      path="/e-commerce/product/:productLayout"
      exact
      component={Products}
    />
    <Route path="/e-commerce/invoice" exact component={Invoice} />
    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

const MainRoutes = () => (
  <Switch>
    {/*Dashboard*/}

    <Route path="/dashboard/analytics" exact component={Analytics} />
    <Route path="/dashboard/crm" exact component={Crm} />
    <Route path="/dashboard/saas" exact component={Saas} />
    <Route path="/dashboard/e-commerce" exact component={ECommerce} />
    <Route path="/dashboard/project-management" exact component={Management} />

    {/* E Commerce */}
    <Route path="/e-commerce" component={ECommerceRoutes} />

    {/*icons*/}
    <Route path="/icons/font-awesome" exact component={FontAwesome} />
    <Route path="/icons/react-icons" exact component={ReactIcons} />

    {/* maps */}
    <Route path="/maps/google-map" exact component={GoogleMapExample} />
    <Route path="/maps/leaflet-map" exact component={LeafletMapExample} />

    {/*App*/}
    <Route path="/app/calendar" exact component={Calendar} />
    <Route path="/app/chat" exact component={Chat} />
    <Route path="/app/kanban" exact component={Kanban} />
    <Route path="/social/feed" exact component={Feed} />
    <Route path="/social/activity-log" exact component={ActivityLog} />
    <Route path="/social/notifications" exact component={Notifications} />
    <Route path="/social/followers" exact component={Followers} />
    <Route path="/events/event-detail" exact component={EventDetail} />
    <Route path="/events/create-an-event" exact component={CreateEvent} />
    <Route path="/events/event-list" exact component={EventList} />

    {/* Email */}
    <Route path="/email" component={EmailRoutes} />

    {/*Pages*/}
    <Route path="/pages/starter" exact component={Starter} />
    <Route path="/user/profile" exact component={Profile} />
    <Route path="/user/settings" exact component={Settings} />
    <Route path="/miscellaneous/associations" exact component={Associations} />
    <Route path="/faq/faq-alt" exact component={FaqAlt} />
    <Route path="/faq/faq-basic" exact component={FaqBasic} />
    <Route path="/faq/faq-accordion" exact component={FaqAccordion} />
    <Route path="/pricing/pricing-default" exact component={PricingDefault} />
    <Route path="/pricing/pricing-alt" exact component={PricingAlt} />
    <Route
      path="/miscellaneous/privacy-policy"
      exact
      component={PrivacyPolicy}
    />
    <Route path="/miscellaneous/invite-people" exact component={InvitePeople} />
    {/* charts-example */}

    <Route path="/charts/chartjs" exact component={Chartjs} />
    <Route path="/charts/echarts/line-charts" exact component={LineCharts} />
    <Route path="/charts/echarts/bar-charts" exact component={BarCharts} />
    <Route
      path="/charts/echarts/candlestick-charts"
      exact
      component={CandlestickCharts}
    />
    <Route path="/charts/echarts/geo-map" exact component={GeoMaps} />
    <Route
      path="/charts/echarts/scatter-charts"
      exact
      component={ScatterCharts}
    />
    <Route path="/charts/echarts/pie-charts" exact component={PieCharts} />
    <Route path="/charts/echarts/radar-charts" exact component={RadarCharts} />
    <Route
      path="/charts/echarts/heatmap-charts"
      exact
      component={HeatmapCharts}
    />
    <Route path="/charts/echarts/how-to-use" exact component={HowToUse} />

    {/*Components*/}
    <Route path="/components/alerts" exact component={Alerts} />
    <Route path="/components/accordion" exact component={Accordion} />
    <Route path="/components/animated-icons" exact component={AnimatedIcons} />
    <Route path="/components/badges" exact component={Badges} />
    <Route path="/components/breadcrumb" exact component={Breadcrumbs} />
    <Route path="/components/buttons" exact component={Buttons} />
    <Route path="/components/calendar" exact component={CalendarExample} />
    <Route path="/components/cards" exact component={Cards} />
    <Route path="/components/dropdowns" exact component={Dropdowns} />
    <Route path="/components/list-group" exact component={ListGroups} />
    <Route path="/components/modals" exact component={Modals} />
    <Route path="/components/offcanvas" exact component={Offcanvas} />
    <Route path="/components/pagination" exact component={Pagination} />
    <Route path="/components/progress-bar" exact component={BasicProgressBar} />
    <Route path="/components/placeholder" exact component={Placeholder} />
    <Route path="/components/spinners" exact component={Spinners} />
    <Route path="/components/toasts" exact component={Toasts} />
    <Route path="/components/pictures/avatar" exact component={Avatar} />
    <Route path="/components/pictures/images" exact component={Image} />
    <Route path="/components/pictures/figures" exact component={Figures} />
    <Route path="/components/pictures/hoverbox" exact component={Hoverbox} />
    <Route path="/components/pictures/lightbox" exact component={Lightbox} />
    <Route path="/components/tooltips" exact component={Tooltips} />
    <Route path="/components/popovers" exact component={Popovers} />
    <Route path="/components/draggable" exact component={DraggableExample} />
    <Route path="/components/scrollspy" exact component={Scrollspy} />
    <Route path="/components/timeline" exact component={Timeline} />
    <Route path="/components/treeview" exact component={TreeviewExample} />
    <Route
      path="/components/carousel/bootstrap"
      exact
      component={BootstrapCarousel}
    />
    <Route path="/components/carousel/slick" exact component={SlickCarousel} />
    <Route path="/components/navs-and-tabs/navs" exact component={Navs} />
    <Route path="/tables/basic-tables" exact component={Tables} />
    <Route
      path="/tables/advance-tables"
      exact
      component={AdvanceTableExamples}
    />
    <Route path="/forms/basic/form-control" exact component={FormControl} />
    <Route path="/forms/basic/input-group" exact component={InputGroup} />
    <Route path="/forms/basic/select" exact component={Select} />
    <Route path="/forms/basic/checks" exact component={Checks} />
    <Route path="/forms/basic/range" exact component={Range} />
    <Route path="/forms/basic/layout" exact component={FormLayout} />
    <Route path="/forms/advance/date-picker" exact component={DatePicker} />
    <Route path="/forms/advance/editor" exact component={Editor} />
    <Route
      path="/forms/advance/emoji-button"
      exact
      component={EmojiMartExample}
    />
    <Route
      path="/forms/advance/advance-select"
      exact
      component={AdvanceSelect}
    />
    <Route path="/forms/advance/file-uploader" exact component={FileUploader} />
    <Route path="/forms/advance/rating" exact component={Rating} />
    <Route path="/forms/floating-labels" exact component={FloatingLabels} />
    <Route path="/forms/validation" exact component={FormValidation} />
    <Route path="/forms/wizard" exact component={WizardForms} />
    <Route path="/components/navs-and-tabs/navbar" exact component={Navbars} />
    <Route path="/components/navs-and-tabs/tabs" exact component={Tabs} />
    <Route path="/components/collapse" exact component={Collapse} />
    <Route
      path="/components/cookie-notice"
      exact
      component={CookieNoticeExample}
    />
    <Route path="/components/countup" exact component={CountUp} />
    <Route path="/components/videos/embed" exact component={Embed} />
    <Route
      path="/components/videos/react-player"
      exact
      component={ReactPlayerExample}
    />
    <Route path="/components/background" exact component={Background} />
    <Route path="/components/search" exact component={Search} />
    <Route path="/components/typed-text" exact component={TypedText} />
    <Route
      path="/components/navs-and-tabs/vertical-navbar"
      exact
      component={VerticalNavbar}
    />
    <Route
      path="/components/navs-and-tabs/top-navbar"
      exact
      component={NavBarTop}
    />
    <Route
      path="/components/navs-and-tabs/combo-navbar"
      exact
      component={ComboNavbar}
    />

    {/*Utilities*/}
    <Route path="/utilities/borders" exact component={Borders} />
    <Route path="/utilities/colors" exact component={Colors} />
    <Route path="/utilities/colored-links" exact component={ColoredLinks} />
    <Route path="/utilities/display" exact component={Display} />
    <Route path="/utilities/visibility" exact component={Visibility} />
    <Route path="/utilities/stretched-link" exact component={StretchedLink} />
    <Route path="/utilities/stretched-link" exact component={StretchedLink} />
    <Route path="/utilities/float" exact component={Float} />
    <Route path="/utilities/position" exact component={Position} />
    <Route path="/utilities/spacing" exact component={Spacing} />
    <Route path="/utilities/sizing" exact component={Sizing} />
    <Route path="/utilities/text-truncation" exact component={TextTruncation} />
    <Route path="/utilities/typography" exact component={Typography} />
    <Route path="/utilities/vertical-align" exact component={VerticalAlign} />
    <Route path="/utilities/flex" exact component={Flex} />
    <Route path="/utilities/grid" exact component={Grid} />
    <Route path="/utilities/scroll-bar" exact component={Scrollbar} />

    <Route path="/widgets" exact component={Widgets} />

    {/*Documentation*/}
    <Route
      path="/documentation/getting-started"
      exact
      component={GettingStarted}
    />
    <Route
      path="/documentation/configuration"
      exact
      component={Configuration}
    />
    <Route path="/documentation/styling" exact component={Styling} />
    <Route path="/documentation/dark-mode" exact component={DarkMode} />
    <Route path="/documentation/plugin" exact component={Plugins} />
    <Route path="/documentation/design-file" exact component={DesignFile} />
    <Route path="/changelog" exact component={Changelog} />
    <Route path="/authentication-modal" component={ModalAuth} />
    {/*Coming Soon*/}
    <Route
      path={inActiveRoutes.map(route => route.to)}
      exact
      component={ComingSoon}
    />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default MainRoutes;
