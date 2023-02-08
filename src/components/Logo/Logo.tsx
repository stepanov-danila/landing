import StyledLogo from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="30"
        fill="none"
        viewBox="0 0 36 30"
        data-testid="logo-icon"
      >
        <path
          fill="#07B6F0"
          fillRule="evenodd"
          d="M33.845 16.777a8.485 8.485 0 00-3.834.915 8.425 8.425 0 00-2.998 2.545c-.167-.839-.378-1.67-.631-2.487a10.543 10.543 0 013.424-2.275 10.598 10.598 0 014.04-.796l2.126-.015v-2.08h-2.13a12.675 12.675 0 00-8.239 3.028 25.19 25.19 0 00-.918-1.965 14.785 14.785 0 019.157-3.162h2.107l.021-2.093h-2.13a16.904 16.904 0 00-10.214 3.416 25.107 25.107 0 00-1.196-1.734 19.02 19.02 0 0111.41-3.78h2.13V4.202h-2.13a21.13 21.13 0 00-12.75 4.255c-.47-.523-.965-1.029-1.477-1.514a23.24 23.24 0 0114.225-4.839h2.13V0h-2.13a25.356 25.356 0 00-15.837 5.53A25.354 25.354 0 002.156 0H.026v2.094h2.13A23.237 23.237 0 0116.38 6.932a26.03 26.03 0 00-1.477 1.514 21.132 21.132 0 00-12.75-4.255H.024v2.093h2.13a19.017 19.017 0 0111.41 3.78c-.424.559-.82 1.14-1.196 1.733A16.903 16.903 0 002.154 8.381H.024l.022 2.094h2.107a14.785 14.785 0 019.157 3.161 24.9 24.9 0 00-.918 1.966 12.678 12.678 0 00-8.239-3.029H.023v2.08l2.126.015c1.386 0 2.759.27 4.04.797a10.54 10.54 0 013.424 2.274 24.836 24.836 0 00-.632 2.488 8.425 8.425 0 00-2.997-2.546 8.485 8.485 0 00-3.835-.915L0 16.785v2.093h2.156c1.68.001 3.29.664 4.477 1.844A6.273 6.273 0 018.49 25.17l.007 4.182 2.114.014V25.17c.001-1.797.213-3.588.632-5.336a10.373 10.373 0 011.47 5.336l-.02 4.182h2.148l-.008-2.71.006-1.473c0-1.962.307-3.911.912-5.778a14.54 14.54 0 011.19 5.778v4.182h2.127v-4.182a14.526 14.526 0 011.191-5.778c.604 1.867.912 3.816.91 5.778l.007 1.456-.012 2.724h2.145l-.02-4.182a10.375 10.375 0 011.47-5.336c.419 1.748.63 3.54.632 5.336v4.198l2.114-.015.006-4.182c.001-1.668.668-3.268 1.856-4.448a6.357 6.357 0 014.477-1.843H36v-2.094l-2.155-.005zM22.017 13.19a17.005 17.005 0 00-1.481 1.647 20.969 20.969 0 00-1.198-1.861 18.94 18.94 0 011.481-1.55c.425.57.826 1.157 1.198 1.764zM18 8.306c.516.477 1.01.976 1.48 1.497-.519.478-1.012.98-1.48 1.508-.467-.527-.96-1.03-1.478-1.508.47-.524.962-1.024 1.48-1.5L18 8.305zm-2.818 3.125a19.128 19.128 0 011.482 1.55 20.74 20.74 0 00-1.198 1.861 17.016 17.016 0 00-1.482-1.648 22.41 22.41 0 011.198-1.766v.003zm-1.686 8.125a12.582 12.582 0 00-1.484-2.29c.268-.73.574-1.446.915-2.146.542.57 1.037 1.183 1.481 1.832a20.58 20.58 0 00-.912 2.6v.004zm4.505-.22a16.737 16.737 0 00-1.198-2.526A18.8 18.8 0 0118 14.743c.443.662.843 1.352 1.198 2.064-.47.807-.87 1.652-1.198 2.525v.003zm4.505.22a20.706 20.706 0 00-.913-2.603c.444-.648.94-1.261 1.481-1.832.342.7.647 1.415.915 2.145a12.57 12.57 0 00-1.483 2.288v.002z"
          clipRule="evenodd"
        ></path>
      </svg>
      <p>
        <strong>ЛАНИТ</strong>
        <span>карьера</span>
      </p>
    </StyledLogo>
  );
};

export default Logo;