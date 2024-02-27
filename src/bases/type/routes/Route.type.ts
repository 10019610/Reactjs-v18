import { Params, LoaderFunction } from "react-router-dom";

export type CustomRouteObject = {
  path?: string;
  id: string;
  index?: boolean;
  element?: JSX.Element;
  guard?: boolean;
  history?: boolean;
  // loader?: () => void;
  loader?: LoaderFunction<any>;
  data?: string;
  children?: CustomRouteObject[];
};

export type CustomHandle = {
  menuName?: string;
  guard?: boolean;
  history?: boolean;
  id?: string;
};

export type RouteType = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: CustomHandle;
};
