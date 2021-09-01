import { Button } from "@material-ui/core";
import { Fragment } from "react";

export default function CarouselSlide(props) {
  const { url } = props.content;
  return (
    <Fragment>
      <div>
        <div
          style={{
            backgroundImage: `url(${url})`,
            width: "400px",
            height: "300px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "1rem" }}
          >
            show more
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
