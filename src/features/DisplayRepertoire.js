import ChooseRepertoireCard from "./ChooseRepertoireCard";
import TuneListCard from "./TuneListCard";
import { Col, Row } from "reactstrap";
import { repertoireData } from "../app/REPERTOIRE/repertoireData";
import { useState } from "react";

const DisplayRepertoire = () => {
  const [tuneList, setTuneList] = useState({
    text: "Click a link below!",
  });

  return (
    <>
      <h1 className="text-center mb-4">Repertoire</h1>
      <Row>
        <Col sm="4" className="mx-auto mb-4">
          <TuneListCard
            title={tuneList.title}
            text={tuneList.text}
          />
        </Col>
      </Row>
      <Row>
        {repertoireData.map((repertoireList, index) => {
          console.log(repertoireList);
          return (
            <Col
              sm="7"
              md="6"
              lg="3"
              className="mx-auto"
              onClick={() => setTuneList(repertoireList)}
            >
              <ChooseRepertoireCard title={repertoireList.title} key={index} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayRepertoire;
