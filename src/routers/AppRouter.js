import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpenseComponent";
import ExpenseDashBoardPage from "../components/DashBoardComponent";
import EditExpensePage from "../components/EditExpenseComponent";
import Header from "../components/HeaderComponent";
import NotFoundPage from "../components/NotFoundComponent";
import HelpExpensePage from "../components/HelpComponent";

const AppRouter = () => (
  //<Switch> is like switch case in C++
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
