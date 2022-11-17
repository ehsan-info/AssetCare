import { useState } from "react";

import { Card, CardBody, CardHeader, Container } from "reactstrap";

import { timerCategoriesData } from "data/categories";
import { useLocalStateAlerts } from "hooks";

export const TimerCategoryPanel = () => {
  const [timersCategories, setTimersCategories] = useState(timerCategoriesData);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onDeleteTimerCategory = id => {
    console.log("Timer category deleted", id);
    setSuccessMessage("Timer category deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setTimersCategories(timersCategories.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h2 className="mb-0">Timer Categories</h2>
          </CardHeader>
          {timersCategories.length ? (
            timersCategories.map(({ name, id }) => (
              <CardBody className="border-top border-bottom border-radius d-flex justify-content-between">
                <h3 className="mb-0">{name}</h3>
                <i
                  className="far fa-trash-alt mt-1  pr-2"
                  aria-hidden="true"
                  onClick={() => onDeleteTimerCategory(id)}
                ></i>
              </CardBody>
            ))
          ) : (
            <CardBody className="border-top border-bottom border-radius">
              <h3 className="mb-0">
                Looks like you don&apos;t have any purchase order categories yet.
              </h3>
              <h4 className="mb-0 text-muted">Press the `+` button to add your first category.</h4>
            </CardBody>
          )}
        </Card>
      </Container>
    </>
  );
};
