import React, { useState } from "react";

export default function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [money,setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money*2);
        }
        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }
    return NewComponent;
}