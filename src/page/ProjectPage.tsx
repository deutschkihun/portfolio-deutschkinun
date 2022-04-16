import React from "react";
import { ProjectPageText } from "../assets/data";
import { Btn, Form, Grid4, Title } from "../helper/lib";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const ProjectPage = (): JSX.Element => {
  ProjectPageText.projectlist.map(({ img }, i) => {
    const screen = new Image();
    screen.src = img;
    screen.onload = function () {
      const canvas = document.getElementById(i.toString()) as HTMLCanvasElement;
      const ctx = canvas && canvas.getContext("2d");
      canvas.width = 250;
      canvas.height = 200;
      ctx && ctx.drawImage(screen, 0, 0, 250, 200);
    };
  });

  return (
    <>
      <Title>{ProjectPageText.title}</Title>
      <Grid4>
        {ProjectPageText.projectlist.map(({ title, description, link }, i) => (
          <OverlayTrigger key={i} overlay={<Tooltip>{description}</Tooltip>}>
            <Form key={i} style={{ padding: "0.5rem" }}>
              <canvas style={{ width: "100%" }} id={i.toString()} />
              <h3>{title}</h3>
              <Btn target="_blank" rel="noreferrer" href={`${link}`}>
                detail
              </Btn>
            </Form>
          </OverlayTrigger>
        ))}
      </Grid4>
    </>
  );
};
