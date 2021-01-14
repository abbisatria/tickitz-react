import React, { Component } from "react";

import "./Seat.scss";

export default class Seat extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="seats">A</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A2")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A3")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A6")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A9")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A12")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("A14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">B</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B2")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B3")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B9")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B12")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("B14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">C</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C2")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C3")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C9")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C12")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("C14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">D</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D2")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D3")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D9")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D12")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("D14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">E</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E2")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E3")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E4")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E9")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E12")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("E14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">F</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F2")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F3")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F9")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F10")}
                name="seat"
              />
            </td>
            <td colSpan="2" className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F11, F12")}
                name="seat"
                className="seats-love"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F13")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("F14")}
                name="seat"
              />
            </td>
          </tr>
          <tr>
            <td className="seats">G</td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G1")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G2")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G3")}
                name="seat"
                disabled
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G4")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G5")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G6")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G7")}
                name="seat"
              />
            </td>
            <td className="seatGap"></td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G8")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G9")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G10")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G11")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G12")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G13")}
                name="seat"
              />
            </td>
            <td className="check">
              <input
                type="checkbox"
                onClick={() => this.props.data("G14")}
                name="seat"
              />
            </td>
          </tr>
          <tr className="seats-number">
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td className="seatGap"></td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
