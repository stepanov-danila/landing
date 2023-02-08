import styled from "styled-components";
import { EcosystemItemTypeEnum } from "../../enums";
import { adaptive } from "../../utils";

export default styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 40px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: ${adaptive.laptopL}) {
    grid-template-columns: 180px 1fr;
    grid-column-gap: 20px;
  }
  @media screen and (max-width: ${adaptive.laptop}) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px auto 1fr;
    text-align: center;
  }
  @media screen and (max-width: ${adaptive.mobileEnd}) {
    grid-template-columns: 90px 1fr;
    grid-template-rows: auto 1fr;
    text-align: left;
  }
  picture {
    grid-row: 1 / span 2;
    display: flex;
    justify-content: center;
    @media screen and (max-width: ${adaptive.laptop}) {
      grid-row: 1;
    }
    @media screen and (max-width: ${adaptive.laptop}) {
      align-items: center;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      grid-row: 1 / span 2;
    }
    &[data-type=${EcosystemItemTypeEnum.Experience}] {
      svg {
        height: 208px;
        width: 240px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 116px;
          width: 127px;
          max-height: 116px;
          max-width: 127px;
        }
      }
    }
    &[data-type=${EcosystemItemTypeEnum.Community}] {
      svg {
        height: 118px;
        width: 148px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 61px;
          width: 77px;
        }
      }
    }
    &[data-type=${EcosystemItemTypeEnum.Onboarding}] {
      svg {
        height: 138px;
        width: 120px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 61px;
          width: 77px;
        }
      }
    }
    &[data-type=${EcosystemItemTypeEnum.Education}] {
      svg {
        height: 112px;
        width: 142px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 57px;
          width: 73px;
        }
      }
    }
    &[data-type=${EcosystemItemTypeEnum.Cybersport}] {
      svg {
        height: 162px;
        width: 157px;
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 91px;
          width: 88px;
        }
      }
    }
    &[data-type=${EcosystemItemTypeEnum.WellBeing}] {
      svg {
        height: 118px;
        width: 100px;
        transform: translateX(20px);
        @media screen and (max-width: ${adaptive.laptopL}) {
          transform: none;
        }
        @media screen and (max-width: ${adaptive.mobileEnd}) {
          height: 61px;
          width: 51px;
          transform: translateX(10px);
        }
      }
    }
    svg {
      align-self: center;
      flex-shrink: 0;
    }
  }
  h3 {
    margin: 0;
    font-family: ${(props) => props.theme.main.fonts.primary};
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 130%;
    color: ${(props) => props.theme.main.colors.black};
    @media screen and (max-width: ${adaptive.laptopL}) {
      font-size: 30px;
    }
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 18px;
    }
  }
  p {
    margin: 10px 0 0;
    font-family: ${(props) => props.theme.main.fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${(props) => props.theme.main.colors.black};
    @media screen and (max-width: ${adaptive.mobileEnd}) {
      font-size: 10px;
      margin: 6px 0 0;
    }
  }
`;
