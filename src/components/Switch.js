import styled from "styled-components";

const SwitchStyle = styled.div`
  .ios-switch,
  .ios-switch * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ios-switch > input {
    display: none;
  }

  .ios-switch {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    height: 30px;
    width: 50px;
    border-radius: 15px;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .ios-switch > span {
    position: relative;
    display: block;
    height: 30px;
    width: 50px;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .ios-switch > input:checked ~ span {
    background-color: #4bd863;
    border-color: #4bd863;
  }

  .ios-switch > input ~ span {
    background-color: #e5e5e5;
    border-color: #e5e5e5;
  }

  .ios-switch-inlay {
    position: absolute;
    display: block;
    background-color: white;
    border-radius: 13px;
    height: 26px;
    width: 46px;
    transition: all 0.33s;
  }

  .ios-switch > input:checked ~ span .ios-switch-inlay {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
  }

  .ios-switch > input ~ span .ios-switch-inlay {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  .ios-switch-knob {
    position: absolute;
    border-radius: 13px;
    display: block;
    height: 26px;
    width: 26px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15);
    -webkit-transition: -webkit-transform 0.3s
        cubic-bezier(0.47, 0.26, 0.37, 1.4),
      width 0.3s, margin 0.3s;
    transition: transform 0.3s cubic-bezier(0.47, 0.26, 0.37, 1.4), width 0.3s,
      margin 0.3s;
  }

  .ios-switch > input ~ span .ios-switch-knob {
    border-color: #e2e2e2;
  }

  .ios-switch > input:checked ~ span .ios-switch-knob {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  .ios-switch:active .ios-switch-knob {
    width: 32px;
  }

  .ios-switch:active > input:checked ~ span .ios-switch-knob {
    margin-left: -6px;
    width: 32px;
  }
`;

const Switch = () => {
  return (
    <SwitchStyle>
      <label className="ios-switch">
        <input type="checkbox" name="my-checkbox" defaultChecked />
        <span>
          <span className="ios-switch-inlay"></span>
          <span className="ios-switch-knob"></span>
        </span>
      </label>
    </SwitchStyle>
  );
};

export default Switch;
