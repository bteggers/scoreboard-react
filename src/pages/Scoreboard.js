import React from 'react';

const Scoreboard = () => {
  return (
        <div className = "main">
            <table>
                <tr>
                    <th className = "round"></th>
                    <th className = "name">Joel</th>
                    <th className = "name">Christy</th>
                    <th className = "name">Annette</th>
                    <th className = "name">Rob</th>
                    <th className = "name">Braden</th>
                </tr>
                <tr>
                    <th>1</th>
                    <td className = "o">0</td>
                    <td className = "p">+60</td>
                    <td className = "p">+130</td>
                    <td className = "o">0</td>
                    <td className = "o">0</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0</td>
                    <td>60</td>
                    <td>130</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td className = "p">+440</td>
                    <td className = "o">0</td>
                    <td className = "p">+140</td>
                    <td className = "p">+350</td>
                    <td className = "o">0</td>
                </tr>
                <tr>
                    <td></td>
                    <td>440</td>
                    <td>60</td>
                    <td>270</td>
                    <td>350</td>
                    <td>0</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td className = "o">0</td>
                    <td className = "o">0</td>
                    <td className = "o">0</td>
                    <td className = "o">0</td>
                    <td className = "o">0</td>
                </tr>
                <tr>
                    <td></td>
                    <td>440</td>
                    <td>60</td>
                    <td>270</td>
                    <td>350</td>
                    <td>0</td>
                </tr>
                
            </table>
        </div>
    );
};

export default Scoreboard;