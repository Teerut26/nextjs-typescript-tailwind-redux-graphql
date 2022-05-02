import { RootState } from "@/store/root";
import { countActions } from "@/store/slice/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Index: React.FC = () => {
    const count = useSelector((state: RootState) => state.countSlice.count);
    const dispatch = useDispatch()
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
            <div>{count}</div>
            <button onClick={()=>dispatch(countActions.increase())}>increase</button>
            <button onClick={()=>dispatch(countActions.decrease())}>decrease</button>
        </div>
    );
};

export default Index;
