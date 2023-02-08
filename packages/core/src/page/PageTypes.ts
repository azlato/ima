import { RouteAction, RouteOptions } from '../router/Router';
import { UnknownParameters } from '../CommonTypes';
import Controller, { IController } from '../controller/Controller';
import ControllerDecorator from '../controller/ControllerDecorator';
import AbstractRoute from '../router/AbstractRoute';

export type ManagedPage = {
  controller?: IController;
  controllerInstance?: Controller;
  decoratedController?: ControllerDecorator;
  options?: RouteOptions;
  params?: UnknownParameters;
  route?: AbstractRoute;
  view?: unknown;
  viewInstance?: unknown;
  state?: {
    activated: boolean;
  };
};

export interface PageAction extends RouteAction {
  state?: {
    scroll: {
      x: number;
      y: number;
    };
  };
}

export type PageData = {
  status: number;
} & UnknownParameters;

export type EventHandler = (data?: UnknownParameters) => void;
