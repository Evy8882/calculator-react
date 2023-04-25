import { useState } from 'react'
import styles from './Calculator.module.css'

export default function Calculator() {
    const [carList, setCarList] = useState([])

    const addList = (v) =>{
        carList[0] == "Operação inválida" && setCarList([])
        isNaN(v) && (isNaN(carList[carList.length -1]) && backList())
        setCarList((prevState) => [...prevState, v])
    }
    const clearList = () =>{
        setCarList([])
    }
    const backList = () =>{
        let newArray = [...carList];
        newArray.pop();
        setCarList(newArray)
    }
    const solve = () => {
        try{
        let tmp = carList.join('');
        setCarList([eval(tmp)])
        }catch(error){
            setCarList(["Operação inválida"])
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.screen}>
                {carList.join("")}
            </div>
            <div className={styles.keyboard}>
                <button className={styles.numButtons} onClick={clearList}>C</button>
                <button className={styles.numButtons} onClick={() => addList("/100*")}>%</button>
                <button className={styles.numButtons} onClick={backList}>←</button>
                <button className={styles.numButtons} onClick={() => addList("/")}>/</button>
                <button className={styles.numButtons} onClick={() => addList("7")}>7</button>
                <button className={styles.numButtons} onClick={() => addList("8")}>8</button>
                <button className={styles.numButtons} onClick={() => addList("9")}>9</button>
                <button className={styles.numButtons} onClick={() => addList("*")}>X</button>
                <button className={styles.numButtons} onClick={() => addList("4")}>4</button>
                <button className={styles.numButtons} onClick={() => addList("5")}>5</button>
                <button className={styles.numButtons} onClick={() => addList("6")}>6</button>
                <button className={styles.numButtons} onClick={() => addList("-")}>-</button>
                <button className={styles.numButtons} onClick={() => addList("1")}>1</button>
                <button className={styles.numButtons} onClick={() => addList("2")}>2</button>
                <button className={styles.numButtons} onClick={() => addList("3")}>3</button>
                <button className={styles.numButtons} onClick={() => addList("+")}>+</button>
                <button className={styles.numButtons} onClick={() => addList("*(-1)")}>+/-</button>
                <button className={styles.numButtons} onClick={() => addList("0")}>0</button>
                <button className={styles.numButtons} onClick={() => addList(".")}>,</button>
                <button className={styles.numButtons} onClick={solve}>=</button>
            </div>

        </div>
    )
}