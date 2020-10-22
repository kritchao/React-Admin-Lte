import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'


export default function Chart() {
    const [allData, setAllData] = useState([]);
    const [math1, setMath1] = useState();
    const [math2, setMath2] = useState();
    const [math3, setMath3] = useState();
    const [cp, setCp] = useState();
    const [statics, setStatics] = useState();

    useEffect(() => {
        async function fetchData() {
            const students = await axios.get('https://test-backend-cybertory.herokuapp.com/students');
            setAllData(students.data);
            setMath1(allData.filter((obj) => obj.subject === "Math I").length);
            setMath2(allData.filter((obj) => obj.subject === "Math II").length);
            setMath3(allData.filter((obj) => obj.subject === "Math III").length);
            setCp(allData.filter((obj) => obj.subject === "Computer Programming").length);
            setStatics(allData.filter((obj) => obj.subject === "Static").length);
        }
        fetchData()

    }, [math1, math2, math3, cp, statics])
    const data = {
        datasets: [{
            data: [math1, math2, math3, cp, statics],
            backgroundColor: ["#f5222d", "#fa8c16", "#7cb305", "#1890ff", "#237804"]
        }],
        labels: [
            'Math I',
            'Math II',
            'Math III',
            'Computer Programming',
            'Static'
        ]
    };

    let max = { "Math I": math1, "Math II": math2, "Math III": math3, "Computer Programming": cp, "Static": statics }

    return (
        <div>
            <div className="row">
                <Doughnut height={125} data={data} maintainAspectRatio={false}></Doughnut>
            </div>
            <div className="row row-cols-3" style={{ margin: "20px 20px" }}>
                <div className="col info-box">
                    <span className="info-box-icon"><ion-icon name="book-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">All Students</span>
                        <span className="info-box-number">{allData.length}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-green"><ion-icon name="calculator-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Math III</span>
                        <span className="info-box-number">{math3}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-orange"><ion-icon name="calculator-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Math II</span>
                        <span className="info-box-number">{math2}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-red"><ion-icon name="calculator-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Math I</span>
                        <span className="info-box-number">{math1}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-primary"><ion-icon name="code-working-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Computer Programming</span>
                        <span className="info-box-number">{cp}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-green"><ion-icon name="stats-chart-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Static</span>
                        <span className="info-box-number">{statics}</span>
                    </div>
                </div>
            </div>
            <div className="row" style={{ margin: "20px 20px" }}>
                <div className="col info-box">
                    <span className="info-box-icon bg-green"><ion-icon name="stats-chart-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Most registered</span>
                        <span className="info-box-number">{Object.keys(max).reduce((a, b) => max[a] > max[b] ? a : b)}</span>
                    </div>
                </div>
                <div className="col info-box">
                    <span className="info-box-icon bg-green"><ion-icon name="stats-chart-outline"></ion-icon></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Less Registered</span>
                        <span className="info-box-number">{Object.keys(max).reduce((a, b) => max[a] < max[b] ? a : b)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
