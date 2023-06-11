/*
 * @copyright EveryWorkflow. All rights reserved.
 */
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Modal,
  Button,
  Space,
  InputNumber,
  Card,
  Typography,
  theme,
  Radio,
} from "antd";
import { ACTION_DISCOUNT_CART_ITEM } from "../../reducer/cart-reducer";

// move this to resources lates
const FedExSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="10 45.67 160.003 44.33"
  >
    <path
      d="M169.018 84.244c0-2.465-1.748-4.27-4.156-4.27-2.404 0-4.154 1.805-4.154 4.27 0 2.461 1.75 4.263 4.154 4.263 2.408 0 4.156-1.805 4.156-4.263zm-5.248.219v2.789h-.901v-6.15h2.239c1.312 0 1.914.573 1.914 1.69 0 .688-.465 1.233-1.064 1.312v.026c.52.083.711.547.818 1.396.082.55.191 1.504.387 1.728h-1.066c-.248-.578-.223-1.396-.414-2.081-.158-.521-.436-.711-1.033-.711h-.875v.003l-.005-.002zm1.117-.795c.875 0 1.125-.466 1.125-.877 0-.486-.25-.87-1.125-.87h-1.117v1.749h1.117v-.002zm-5.17.576c0-3.037 2.411-5.09 5.141-5.09 2.738 0 5.146 2.053 5.146 5.09 0 3.031-2.407 5.086-5.146 5.086-2.73 0-5.141-2.055-5.141-5.086z"
      fill="#ff5a00"
    />
    <g fill="#ff5a00">
      <path d="M141.9 88.443l-5.927-6.647-5.875 6.647h-12.362l12.082-13.574-12.082-13.578h12.748l5.987 6.596 5.761-6.596h12.302l-12.022 13.521 12.189 13.631zM93.998 88.443V45.67h23.738v9.534h-13.683v6.087h13.683v9.174h-13.683v8.42h13.683v9.558z" />
    </g>
    <path
      d="M83.98 45.67v17.505h-.111c-2.217-2.548-4.988-3.436-8.201-3.436-6.584 0-11.544 4.479-13.285 10.396-1.986-6.521-7.107-10.518-14.699-10.518-6.167 0-11.035 2.767-13.578 7.277V61.29H21.361v-6.085h13.91v-9.533H10v42.771h11.361V70.465h11.324a17.082 17.082 0 0 0-.519 4.229c0 8.918 6.815 15.185 15.516 15.185 7.314 0 12.138-3.437 14.687-9.694h-9.737c-1.316 1.883-2.316 2.439-4.949 2.439-3.052 0-5.686-2.664-5.686-5.818h19.826C62.683 83.891 68.203 90 75.779 90c3.268 0 6.26-1.607 8.089-4.322h.11v2.771h10.017V45.672H83.98v-.002zM42.313 70.593c.633-2.718 2.74-4.494 5.37-4.494 2.896 0 4.896 1.721 5.421 4.494H42.313zm35.588 11.341c-3.691 0-5.985-3.439-5.985-7.031 0-3.84 1.996-7.529 5.985-7.529 4.139 0 5.788 3.691 5.788 7.529 0 3.638-1.746 7.031-5.788 7.031z"
      fill="#29007c"
    />
  </svg>
);
//

const { Title, Text } = Typography;
let discountAmount = 0;
const CartFooterComponent = ({
  total_price,
  dispatch,
}: {
  total_price: number;
  dispatch: any;
}) => {
  const { token } = theme.useToken();
  const [discount, setDiscount] = useState<any>("");
  const [openModal, setOpenModal] = useState(false);
  const [total_price_modal, setTotalPriceModal] = useState(0);

  useEffect(() => {
    setTotalPriceModal(total_price);
  }, [total_price]);

  const showModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const calculateDiscount = () => {
    // using static valuee..this will change
    let discountPrice = total_price - (50 / 100) * total_price;
    setTotalPriceModal(discountPrice);
  };

  const onPressOk = () => {
    dispatch({
      type: ACTION_DISCOUNT_CART_ITEM,
      payload: { discount_amount: 50 },
    });
    closeModal();
  };

  return (
    <Space direction="vertical">
      <Row>
        <Card
          bordered={false}
          style={{ width: 300, backgroundColor: token.colorBgBase }}
        >
          <Row>
            <Space>
              <FedExSVG />
              <Row>
                <Col span={24}>
                  <Text style={{ fontWeight: "700" }}>FedEx Fast Delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Expected delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Friday, 28</Text>
                </Col>
              </Row>
            </Space>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card
          bordered={false}
          style={{ width: 300, backgroundColor: token.colorBgBase }}
        >
          <Row>
            <Space>
              <FedExSVG />
              <Row>
                <Col span={24}>
                  <Text style={{ fontWeight: "700" }}>FedEx Fast Delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Expected delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Friday, 28</Text>
                </Col>
              </Row>
            </Space>
          </Row>
        </Card>
      </Row>
      <Row>
        <Card
          bordered={false}
          style={{ width: 300, backgroundColor: token.colorBgBase }}
        >
          <Row>
            <Space>
              <FedExSVG />
              <Row>
                <Col span={24}>
                  <Text style={{ fontWeight: "700" }}>FedEx Fast Delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Expected delivery</Text>
                </Col>
                <Col span={24}>
                  <Text>Friday, 28</Text>
                </Col>
              </Row>
            </Space>
          </Row>
        </Card>
      </Row>
    </Space>
  );
};

export default CartFooterComponent;
