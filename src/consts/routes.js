import PagesMain from "../pages/pagesMain/PagesMain";
import MinusState from "../pages/pagesMain/pages/MinusState";
import Page2 from "../pages/pagesMain/pages/Page2";
import PagesSecond from "../pages/pagesSecond/PagesSecond";
import PlusState from "../pages/pagesSecond/pages/PlusState";
import PagesThired from "../pages/pagesThired/PagesThired";
import MultiState from "../pages/pagesThired/pages/MultiState";

export const HOMEPAGE = "/";

export const PAGES_MAIN = "pages-main";
export const MINUS_STATE_TITLE = "Minus state";
export const UPDATE_USER = "update-user";
export const UPDATE_USER_TITLE = "Update user";
export const PAGE_3 = "page-3";
export const PAGE_4 = "page-4";
export const PAGE_5 = "page-5";

export const PAGES_SECOND = "pages-second";
export const PLUS_STATE_TITLE = "Plus state";
export const PAGE_7 = "page-7";
export const PAGE_8 = "page-8";
export const PAGE_9 = "page-9";
export const PAGE_10 = "page-10";

export const PAGES_THIRED = "pages-thired";
export const MULTI_STATE_TITLE = "Multi state";
export const PAGE_12 = "page-12";
export const PAGE_13 = "page-13";
export const PAGE_14 = "page-14";
export const PAGE_15 = "page-15";

export const ROUTES_PAGES_MAIN = [
  {
    title: MINUS_STATE_TITLE,
    path: PAGES_MAIN,
    element: function () {
      return <MinusState />;
    },
  },
  {
    title: UPDATE_USER_TITLE,
    path: UPDATE_USER,
    element: function () {
      return <Page2 />;
    },
  },
  // {
  //   title: "Page-3",
  //   path: PAGE_3,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-4",
  //   path: PAGE_4,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-5",
  //   path: PAGE_5,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
];

export const ROUTES_PAGES_SECOND = [
  {
    title: PLUS_STATE_TITLE,
    path: PAGES_SECOND,
    element: function () {
      return <PlusState />;
    },
  },
  // {
  //   title: "Page-7",
  //   path: PAGE_7,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-8",
  //   path: PAGE_8,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-9",
  //   path: PAGE_9,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-10",
  //   path: PAGE_10,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
];

export const ROUTES_PAGES_THIRED = [
  {
    title: MULTI_STATE_TITLE,
    path: PAGES_THIRED,
    element: function () {
      return <MultiState />;
    },
  },
  // {
  //   title: "Page-12",
  //   path: PAGE_12,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-13",
  //   path: PAGE_13,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-14",
  //   path: PAGE_14,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
  // {
  //   title: "Page-15",
  //   path: PAGE_15,
  //   element: function () {
  //     return <div> {this.title}</div>;
  //   },
  // },
];

export const PAGES = [
  {
    title: "Pages-Main",
    path: PAGES_MAIN,
    element: function () {
      return <PagesMain />;
    },
    children: ROUTES_PAGES_MAIN,
  },
  {
    title: "Pages-Second",
    path: PAGES_SECOND,
    element: function () {
      return <PagesSecond />;
    },
    children: ROUTES_PAGES_SECOND,
  },
  {
    title: "Pages-Thired",
    path: PAGES_THIRED,
    element: function () {
      return <PagesThired />;
    },
    children: ROUTES_PAGES_THIRED,
  },
];
