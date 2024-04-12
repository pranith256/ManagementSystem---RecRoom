import {useEffect, useState} from "react";
import "../Styles/neonEffect.css";

function RegisterPageTable() {
    const [data, getData] = useState([]);
    const URL = "https://illinirecroom.herokuapp.com/get-count";



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(URL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                getData(response.data);
            });
    };
    return (
        <div class="registerPageTableBody">
            <tbody>
            <tr>
                <td className="registerPageTable wrapper"><h6>Bowling: {data.bowling} in queue</h6></td>
            </tr>
            <tr>
                <td class="registerPageTable wrapper"><h6>Billiards: {data.billiards} in queue</h6></td>
            </tr>
            </tbody>
        </div>
    );
}

export default RegisterPageTable;