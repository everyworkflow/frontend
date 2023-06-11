"use client";
import React from "react";
import { Button, Card, Divider, Input, Space, Typography, theme } from "antd";

const { Text } = Typography;
// add this to resources later
const Logo = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 303 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="90"
        y="59.397"
        width="84"
        height="84"
        transform="rotate(-45 90 59.397)"
        fill="#6AD237"
      />
      <rect
        x="149"
        y="136"
        width="84"
        height="84"
        transform="rotate(-45 149 136)"
        fill="#52C41A"
      />
      <rect
        x="90"
        y="214.396"
        width="84"
        height="84"
        transform="rotate(-45 90 214.396)"
        fill="#52C41A"
      />
      <rect
        x="30"
        y="136"
        width="84"
        height="84"
        transform="rotate(-45 30 136)"
        fill="#52C41A"
      />
      <rect
        x="89"
        y="135.396"
        width="84"
        height="84"
        rx="8"
        transform="rotate(-45 89 135.396)"
        fill="#56A430"
      />
      <rect y="207" width="303" height="67" fill="#F1F1F1" />
      <path
        d="M85.6875 232.41V235.17H71.8359V232.41H85.6875ZM72.3633 221.406V247H68.9707V221.406H72.3633ZM88.6406 221.406V247H85.2656V221.406H88.6406ZM102.07 247.352C100.746 247.352 99.5449 247.129 98.4668 246.684C97.4004 246.227 96.4805 245.588 95.707 244.768C94.9453 243.947 94.3594 242.975 93.9492 241.85C93.5391 240.725 93.334 239.494 93.334 238.158V237.42C93.334 235.873 93.5625 234.496 94.0195 233.289C94.4766 232.07 95.0977 231.039 95.8828 230.195C96.668 229.352 97.5586 228.713 98.5547 228.279C99.5508 227.846 100.582 227.629 101.648 227.629C103.008 227.629 104.18 227.863 105.164 228.332C106.16 228.801 106.975 229.457 107.607 230.301C108.24 231.133 108.709 232.117 109.014 233.254C109.318 234.379 109.471 235.609 109.471 236.945V238.404H95.2676V235.75H106.219V235.504C106.172 234.66 105.996 233.84 105.691 233.043C105.398 232.246 104.93 231.59 104.285 231.074C103.641 230.559 102.762 230.301 101.648 230.301C100.91 230.301 100.23 230.459 99.6094 230.775C98.9883 231.08 98.4551 231.537 98.0098 232.146C97.5645 232.756 97.2188 233.5 96.9727 234.379C96.7266 235.258 96.6035 236.271 96.6035 237.42V238.158C96.6035 239.061 96.7266 239.91 96.9727 240.707C97.2305 241.492 97.5996 242.184 98.0801 242.781C98.5723 243.379 99.1641 243.848 99.8555 244.188C100.559 244.527 101.355 244.697 102.246 244.697C103.395 244.697 104.367 244.463 105.164 243.994C105.961 243.525 106.658 242.898 107.256 242.113L109.225 243.678C108.814 244.299 108.293 244.891 107.66 245.453C107.027 246.016 106.248 246.473 105.322 246.824C104.408 247.176 103.324 247.352 102.07 247.352ZM116.52 230.969V247H113.268V227.98H116.432L116.52 230.969ZM122.461 227.875L122.443 230.898C122.174 230.84 121.916 230.805 121.67 230.793C121.436 230.77 121.166 230.758 120.861 230.758C120.111 230.758 119.449 230.875 118.875 231.109C118.301 231.344 117.814 231.672 117.416 232.094C117.018 232.516 116.701 233.02 116.467 233.605C116.244 234.18 116.098 234.812 116.027 235.504L115.113 236.031C115.113 234.883 115.225 233.805 115.447 232.797C115.682 231.789 116.039 230.898 116.52 230.125C117 229.34 117.609 228.73 118.348 228.297C119.098 227.852 119.988 227.629 121.02 227.629C121.254 227.629 121.523 227.658 121.828 227.717C122.133 227.764 122.344 227.816 122.461 227.875ZM124.254 237.701V237.297C124.254 235.926 124.453 234.654 124.852 233.482C125.25 232.299 125.824 231.273 126.574 230.406C127.324 229.527 128.232 228.848 129.299 228.367C130.365 227.875 131.561 227.629 132.885 227.629C134.221 227.629 135.422 227.875 136.488 228.367C137.566 228.848 138.48 229.527 139.23 230.406C139.992 231.273 140.572 232.299 140.971 233.482C141.369 234.654 141.568 235.926 141.568 237.297V237.701C141.568 239.072 141.369 240.344 140.971 241.516C140.572 242.688 139.992 243.713 139.23 244.592C138.48 245.459 137.572 246.139 136.506 246.631C135.451 247.111 134.256 247.352 132.92 247.352C131.584 247.352 130.383 247.111 129.316 246.631C128.25 246.139 127.336 245.459 126.574 244.592C125.824 243.713 125.25 242.688 124.852 241.516C124.453 240.344 124.254 239.072 124.254 237.701ZM127.506 237.297V237.701C127.506 238.65 127.617 239.547 127.84 240.391C128.062 241.223 128.396 241.961 128.842 242.605C129.299 243.25 129.867 243.76 130.547 244.135C131.227 244.498 132.018 244.68 132.92 244.68C133.811 244.68 134.59 244.498 135.258 244.135C135.938 243.76 136.5 243.25 136.945 242.605C137.391 241.961 137.725 241.223 137.947 240.391C138.182 239.547 138.299 238.65 138.299 237.701V237.297C138.299 236.359 138.182 235.475 137.947 234.643C137.725 233.799 137.385 233.055 136.928 232.41C136.482 231.754 135.92 231.238 135.24 230.863C134.572 230.488 133.787 230.301 132.885 230.301C131.994 230.301 131.209 230.488 130.529 230.863C129.861 231.238 129.299 231.754 128.842 232.41C128.396 233.055 128.062 233.799 127.84 234.643C127.617 235.475 127.506 236.359 127.506 237.297ZM168.709 240.531C168.709 239.934 168.615 239.406 168.428 238.949C168.252 238.48 167.936 238.059 167.479 237.684C167.033 237.309 166.412 236.951 165.615 236.611C164.83 236.271 163.834 235.926 162.627 235.574C161.361 235.199 160.219 234.783 159.199 234.326C158.18 233.857 157.307 233.324 156.58 232.727C155.854 232.129 155.297 231.443 154.91 230.67C154.523 229.896 154.33 229.012 154.33 228.016C154.33 227.02 154.535 226.1 154.945 225.256C155.355 224.412 155.941 223.68 156.703 223.059C157.477 222.426 158.396 221.934 159.463 221.582C160.529 221.23 161.719 221.055 163.031 221.055C164.953 221.055 166.582 221.424 167.918 222.162C169.266 222.889 170.291 223.844 170.994 225.027C171.697 226.199 172.049 227.453 172.049 228.789H168.674C168.674 227.828 168.469 226.979 168.059 226.24C167.648 225.49 167.027 224.904 166.195 224.482C165.363 224.049 164.309 223.832 163.031 223.832C161.824 223.832 160.828 224.014 160.043 224.377C159.258 224.74 158.672 225.232 158.285 225.854C157.91 226.475 157.723 227.184 157.723 227.98C157.723 228.52 157.834 229.012 158.057 229.457C158.291 229.891 158.648 230.295 159.129 230.67C159.621 231.045 160.242 231.391 160.992 231.707C161.754 232.023 162.662 232.328 163.717 232.621C165.17 233.031 166.424 233.488 167.479 233.992C168.533 234.496 169.4 235.064 170.08 235.697C170.771 236.318 171.281 237.027 171.609 237.824C171.949 238.609 172.119 239.5 172.119 240.496C172.119 241.539 171.908 242.482 171.486 243.326C171.064 244.17 170.461 244.891 169.676 245.488C168.891 246.086 167.947 246.549 166.846 246.877C165.756 247.193 164.537 247.352 163.189 247.352C162.006 247.352 160.84 247.188 159.691 246.859C158.555 246.531 157.518 246.039 156.58 245.383C155.654 244.727 154.91 243.918 154.348 242.957C153.797 241.984 153.521 240.859 153.521 239.582H156.896C156.896 240.461 157.066 241.217 157.406 241.85C157.746 242.471 158.209 242.986 158.795 243.396C159.393 243.807 160.066 244.111 160.816 244.311C161.578 244.498 162.369 244.592 163.189 244.592C164.373 244.592 165.375 244.428 166.195 244.1C167.016 243.771 167.637 243.303 168.059 242.693C168.492 242.084 168.709 241.363 168.709 240.531ZM179.203 220V247H175.951V220H179.203ZM178.43 236.77L177.076 236.717C177.088 235.416 177.281 234.215 177.656 233.113C178.031 232 178.559 231.033 179.238 230.213C179.918 229.393 180.727 228.76 181.664 228.314C182.613 227.857 183.662 227.629 184.811 227.629C185.748 227.629 186.592 227.758 187.342 228.016C188.092 228.262 188.73 228.66 189.258 229.211C189.797 229.762 190.207 230.477 190.488 231.355C190.77 232.223 190.91 233.283 190.91 234.537V247H187.641V234.502C187.641 233.506 187.494 232.709 187.201 232.111C186.908 231.502 186.48 231.062 185.918 230.793C185.355 230.512 184.664 230.371 183.844 230.371C183.035 230.371 182.297 230.541 181.629 230.881C180.973 231.221 180.404 231.689 179.924 232.287C179.455 232.885 179.086 233.57 178.816 234.344C178.559 235.105 178.43 235.914 178.43 236.77ZM194.918 237.701V237.297C194.918 235.926 195.117 234.654 195.516 233.482C195.914 232.299 196.488 231.273 197.238 230.406C197.988 229.527 198.896 228.848 199.963 228.367C201.029 227.875 202.225 227.629 203.549 227.629C204.885 227.629 206.086 227.875 207.152 228.367C208.23 228.848 209.145 229.527 209.895 230.406C210.656 231.273 211.236 232.299 211.635 233.482C212.033 234.654 212.232 235.926 212.232 237.297V237.701C212.232 239.072 212.033 240.344 211.635 241.516C211.236 242.688 210.656 243.713 209.895 244.592C209.145 245.459 208.236 246.139 207.17 246.631C206.115 247.111 204.92 247.352 203.584 247.352C202.248 247.352 201.047 247.111 199.98 246.631C198.914 246.139 198 245.459 197.238 244.592C196.488 243.713 195.914 242.688 195.516 241.516C195.117 240.344 194.918 239.072 194.918 237.701ZM198.17 237.297V237.701C198.17 238.65 198.281 239.547 198.504 240.391C198.727 241.223 199.061 241.961 199.506 242.605C199.963 243.25 200.531 243.76 201.211 244.135C201.891 244.498 202.682 244.68 203.584 244.68C204.475 244.68 205.254 244.498 205.922 244.135C206.602 243.76 207.164 243.25 207.609 242.605C208.055 241.961 208.389 241.223 208.611 240.391C208.846 239.547 208.963 238.65 208.963 237.701V237.297C208.963 236.359 208.846 235.475 208.611 234.643C208.389 233.799 208.049 233.055 207.592 232.41C207.146 231.754 206.584 231.238 205.904 230.863C205.236 230.488 204.451 230.301 203.549 230.301C202.658 230.301 201.873 230.488 201.193 230.863C200.525 231.238 199.963 231.754 199.506 232.41C199.061 233.055 198.727 233.799 198.504 234.643C198.281 235.475 198.17 236.359 198.17 237.297ZM219.562 231.637V254.312H216.293V227.98H219.281L219.562 231.637ZM232.377 237.332V237.701C232.377 239.084 232.213 240.367 231.885 241.551C231.557 242.723 231.076 243.742 230.443 244.609C229.822 245.477 229.055 246.15 228.141 246.631C227.227 247.111 226.178 247.352 224.994 247.352C223.787 247.352 222.721 247.152 221.795 246.754C220.869 246.355 220.084 245.775 219.439 245.014C218.795 244.252 218.279 243.338 217.893 242.271C217.518 241.205 217.26 240.004 217.119 238.668V236.699C217.26 235.293 217.523 234.033 217.91 232.92C218.297 231.807 218.807 230.857 219.439 230.072C220.084 229.275 220.863 228.672 221.777 228.262C222.691 227.84 223.746 227.629 224.941 227.629C226.137 227.629 227.197 227.863 228.123 228.332C229.049 228.789 229.828 229.445 230.461 230.301C231.094 231.156 231.568 232.182 231.885 233.377C232.213 234.561 232.377 235.879 232.377 237.332ZM229.107 237.701V237.332C229.107 236.383 229.008 235.492 228.809 234.66C228.609 233.816 228.299 233.078 227.877 232.445C227.467 231.801 226.939 231.297 226.295 230.934C225.65 230.559 224.883 230.371 223.992 230.371C223.172 230.371 222.457 230.512 221.848 230.793C221.25 231.074 220.74 231.455 220.318 231.936C219.896 232.404 219.551 232.943 219.281 233.553C219.023 234.15 218.83 234.771 218.701 235.416V239.969C218.936 240.789 219.264 241.562 219.686 242.289C220.107 243.004 220.67 243.584 221.373 244.029C222.076 244.463 222.961 244.68 224.027 244.68C224.906 244.68 225.662 244.498 226.295 244.135C226.939 243.76 227.467 243.25 227.877 242.605C228.299 241.961 228.609 241.223 228.809 240.391C229.008 239.547 229.107 238.65 229.107 237.701Z"
        fill="#52C41A"
      />
    </svg>
  );
};

const GoogleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="30px"
      height="30px"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
};

const FacebookSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="30px"
      height="30px"
    >
      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
      <path
        fill="#fff"
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
      />
    </svg>
  );
};
//

const SignIn = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: token.colorBgContainer,
        overflow: "scroll",
        padding: "20px 0px",
      }}
    >
      <Card
        bordered={false}
        style={{
          width: 450,
          padding: "10px 50px 10px 50px",
          borderRadius: 4,
          backgroundColor: token.colorBgBase,
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          size={15}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Logo />
          </div>
          <Input placeholder="Email" style={{ height: 40, borderRadius: 4 }} />
          <Input
            placeholder="Password"
            style={{ height: 40, borderRadius: 4 }}
          />
          <Divider>
            <Text type="secondary">or</Text>
          </Divider>
          <Button
            type="primary"
            style={{ width: "100%", height: 40, borderRadius: 4 }}
          >
            Continue
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
                padding: 5,
                borderRadius: 4,
              }}
            >
              <GoogleSVG />
              <Text style={{ marginLeft: 10 }}>Continue with Google</Text>
            </div>
            <div style={{ padding: "5px 5px 5px 5px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d9d9d9",
                padding: "5px 5px 5px 20px",
                borderRadius: 4,
              }}
            >
              <FacebookSVG />
              <Text style={{ marginLeft: 10 }}>Continue with Facebook</Text>
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default SignIn;
