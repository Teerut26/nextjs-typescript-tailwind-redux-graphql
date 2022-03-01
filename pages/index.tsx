import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CounterEnum } from "../redux/enum/CounterEnum";
import Navabar from "./components/Navabar";

interface Home {
  counterReducter: Object;
  dispatch: any;
}

const Home = ({ counterReducter, dispatch }: Home) => {
  const [DataFromApi, setDataFromApi] = useState("");

  useEffect(() => {
    (async () => {
      let { data } = await axios.post("/api/graphql", {
        query: `{
                getBooks {
                  title
                  id
                }
              }`,
      });
      setDataFromApi(JSON.stringify(data, null, 2));
    })();
  }, []);

  const increase = () => {
    dispatch({
      type: CounterEnum.INCREMENT_COUNTER,
      playload: {},
    });
  };

  const decrease = () => {
    dispatch({
      type: CounterEnum.DECREMENT_COUNTER,
      playload: {},
    });
  };
  return (
    <div>
      <Navabar title={"TEST"} />
      <div className="flex flex-col items-center p-5">
        <div className="text-5xl">{counterReducter}</div>
      </div>
      <div className="flex justify-center p-3">
        <div
          onClick={() => increase()}
          className="p-3 text-center bg-green-500 text-white cursor-pointer select-none"
        >
          INCREMENT_COUNTER
        </div>
      </div>
      <div className="flex justify-center p-3">
        <div
          onClick={() => decrease()}
          className="p-3 text-center bg-red-500 text-white cursor-pointer select-none"
        >
          DECREMENT_COUNTER
        </div>
      </div>
      <div className="flex justify-center">
        <div>{DataFromApi}</div>
      </div>
    </div>
  );
};

export default connect((state) => {
  return state;
})(Home);
