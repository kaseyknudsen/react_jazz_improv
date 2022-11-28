import ChooseRepertoireCard from "./ChooseRepertoireCard";
import TuneListCard from "./TuneListCard";
import { Col, Row } from "reactstrap";
import { repertoireData } from "../app/REPERTOIRE/repertoireData";
import { useState } from "react";

const sorted = (array) => {
  const result = [...array];
  result.sort();
  return result;
};

const DisplayRepertoire = () => {
  const [tuneList, setTuneList] = useState({
    text: ["Click a link below!"],
  });

  return (
    <>
      <h1 className="text-center mb-4">Repertoire</h1>
      <Row>
        <Col xs="4" className="mx-auto mb-4">
          <TuneListCard title={tuneList.title} text={sorted(tuneList.text)} />
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
              className="mx-auto repertoire-cards"
              onClick={() => setTuneList(repertoireList)}
            >
              <div className="repertoire-cards">
                <ChooseRepertoireCard
                  title={repertoireList.title}
                  key={index}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayRepertoire;
