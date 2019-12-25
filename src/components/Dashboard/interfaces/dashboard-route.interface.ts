import { RouteProps } from 'react-router';

export default interface DashboardRoute extends RouteProps {
  icon: JSX.Element;
  active?: boolean;
  label: string;
}
