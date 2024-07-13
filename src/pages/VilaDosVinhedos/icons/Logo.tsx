import styled from "styled-components";
import { media } from "../styles/breakpoints";

interface SvgWrapperProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

const SvgWrapper = styled.svg<SvgWrapperProps>`
  width: ${({ xs }) => xs || '100%'};

  ${({ sm }) => sm && media.sm`
    width: ${sm};
  `}
  ${({ md }) => md && media.md`
    width: ${md};
  `}
  ${({ lg }) => lg && media.lg`
    width: ${lg};
  `}
  ${({ xl }) => xl && media.xl`
    width: ${xl};
  `}
  ${({ xxl }) => xxl && media.xxl`
    width: ${xxl};
  `}
`;

const Logo: React.FC<SvgWrapperProps> = (props) => (
  <SvgWrapper
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -70 850 355"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M121.067 96.786c-1.479-11.354-2.944-22.915-4.498-34.463-4.271-31.75-8.642-63.486-12.812-95.247-.678-5.17-2.278-6.46-6.912-4.172C71.359-24.522 45.84-12.02 20.195.18c-4.816 2.291-5.645 4.657-4.238 10.04C26.283 49.564 36.243 89.02 46.33 128.438a622206.5 622206.5 0 0 0 31.045 121.287c.253.993.428 2.007.69 3.263-4.011 2.282-6.012 1.151-7.272-3.389A58936.815 58936.815 0 0 0 27.465 94.121 45666.274 45666.274 0 0 0 1.945 3.178C-1.324-8.389-1.307-8.768 8.597-14.38a94260.555 94260.555 0 0 1 99.43-56.282c6.552-3.704 9.258-3.158 13.754 2.736C147.483-34.24 173.193-.56 198.911 33.11c2.79 3.635 3.514 6.884 2.281 11.472-2.683 9.986-4.743 20.163-7.337 31.484l-7.673 2.236c.701-.749 1.043-2.492 1.682-4.889 2.415-9.051 3.884-18.392 6.154-27.497.994-3.983.131-6.607-2.353-9.566-16.924-20.157-33.688-40.466-50.508-60.727-1.82-2.187-3.554-4.494-5.565-6.494-.87-.863-2.582-1.727-3.45-1.356-.901.383-1.449 2.201-1.774 3.5a16.1 16.1 0 0 0-.085 3.762l-.045 111.512v7.532l-9.171 2.708Z"
    />
    <path
      fill="#3E5481"
      d="M194.166 75.832c11.096-3.158 21.123-5.801 31.032-8.883 11.543-3.589 11.736-3.748 19.345 6.293 19.665 25.948 39.204 52.005 58.974 77.859 3.187 4.168 3.661 7.467 1.084 12.302-15.079 28.245-29.862 56.669-44.719 85.046-1.676 3.196-3.264 6.373-8.089 3.798 5.7-12.563 11.311-24.952 16.938-37.333 7.884-17.355 15.679-34.762 23.765-52.01 1.686-3.598 1.531-5.881-1.147-8.772-14.233-15.374-28.276-30.949-42.423-46.414-4.653-5.085-6.028-4.651-8.686 2.724a103166.746 103166.746 0 0 0-32.524 90.374c-5.706 15.843-11.553 31.629-17.122 47.526-1.405 4.013-3.183 6.118-8 4.142 6.636-33.836 13.238-67.421 19.803-101.015a12260.6 12260.6 0 0 0 10.104-52.307c.999-5.223-.599-6.925-5.734-5.828-13.843 2.96-27.657 6.069-41.485 9.11-11.137 2.45-22.245 5.136-33.446 7.222-5.28.983-7.008 3.44-6.98 9.179.197 42.008.191 84.019-.017 126.031-.011 2.819 2.183 7.497-2.732 7.9-.904.074-3.001-5.095-3.173-7.937-2.603-43.143-4.978-86.302-7.408-129.453-.035-.631-.098-1.256-.16-1.883-1.317-12.479-1.318-12.479 10.011-16.95l72.789-20.721Z"
    />
    <path
      fill="#000"
      d="M455.809-12.864v138.112h-22.375V4.903c-8.088 40.568-16 80.267-24 120.404h-14.431L371.164 3.329l-.649.18 1.81 121.78h-23.434v-138.15c11.418 0 22.562-.207 33.682.255 1.432.06 3.563 3.389 3.988 5.536 5.534 27.983 10.817 56.026 16.346 84.997.72-5.211 1.18-9.794 2.002-14.293 4.39-24.092 8.806-48.183 13.449-72.214.32-1.657 2.529-4.053 3.91-4.096 10.943-.338 21.898-.188 33.541-.188ZM779.058-12.455h25.641V125.24c-7.928 0-15.645.246-23.323-.207-1.551-.092-3.646-2.563-4.321-4.391-11.312-30.5-22.437-61.073-33.614-91.626a16.91 16.91 0 0 0-1.036-1.763l3.24 97.565h-25.356V-12.839c7.886 0 15.412-.248 22.897.205 1.529.093 3.591 2.552 4.251 4.362 11.602 31.762 23.023 63.593 34.49 95.406.283.784.645 1.537.822 1.955l-3.691-101.544ZM632.822 54.215c12.381 3.972 15.444 13.732 15.623 25.769.15 9.91.519 19.835 1.298 29.708.401 5.029 1.906 9.961 3.026 15.452h-26.616c-.479-8.906-.93-17.886-1.451-26.861-.411-7.073-.727-14.163-1.427-21.205-.533-5.373-3.762-8.691-8.6-9.356-7.231-.993-14.529-1.418-22.447-2.144v59.729h-23.869V-12.878c5.138 0 10.068-.074 14.996.015 12.584.225 25.194.053 37.745.893 23.894 1.598 30.871 19.827 28.055 41.56-1.424 11.005-5.299 20.38-16.333 24.625Zm-40.416-8.458c5.806 0 10.984.087 16.156-.02 9.227-.19 13.447-3.898 15.633-13.517 2.538-11.165-1.112-22.31-8.831-23.553-7.49-1.206-15.276-.262-22.958-.262v37.352ZM557.049 124.869h-19.212c-1.107 0-2.179-.445-3.035-1.26-.855-.814-1.441-1.947-1.656-3.206l-5.095-29.725h-25.857c-1.693 9.982-3.505 19.788-4.956 29.666-.541 3.692-1.777 5.088-5.05 4.954-6.267-.257-12.549-.074-19.5-.074 2.3-11.49 4.419-22.289 6.626-33.064 6.541-31.927 13.149-63.836 19.654-95.775 1.871-9.186 1.751-9.22 9.952-9.223 6.117 0 12.245-.234 18.343.157 1.476.095 3.834 1.98 4.133 3.483 8.678 43.688 17.22 87.413 25.628 131.174.088.961.097 1.93.025 2.893ZM515.51 7.351l-9.376 62.227h18.081c-3.041-21.74-6.007-42.97-8.705-62.227ZM697.783 125.307h-22.51V-12.907h22.51v138.214ZM849.72 123.955h-22.509V-11.1h22.509v135.055ZM365.031 199.143c0 .316-.007.594-.022.828-.01.199-.035.396-.076.59a2.508 2.508 0 0 1-.131.421 2.706 2.706 0 0 1-.349.535 5.75 5.75 0 0 1-.929.871 8.345 8.345 0 0 1-1.478.928 9.384 9.384 0 0 1-1.78.659 7.678 7.678 0 0 1-1.988.254 7.642 7.642 0 0 1-3.757-.901 7.538 7.538 0 0 1-2.741-2.631 13.43 13.43 0 0 1-1.682-4.243 26.052 26.052 0 0 1-.579-5.805 25.426 25.426 0 0 1 .71-6.42 13.341 13.341 0 0 1 1.944-4.398 7.922 7.922 0 0 1 2.905-2.544 8.023 8.023 0 0 1 3.615-.829 7.343 7.343 0 0 1 1.824.225 8.316 8.316 0 0 1 1.627.59c.469.226.912.509 1.321.842.306.24.588.513.842.815.135.166.256.345.36.534.071.148.126.303.164.464.046.198.075.4.088.604.014.225.021.506.021.842.031.52-.036 1.04-.197 1.531-.131.291-.295.436-.48.436a1.154 1.154 0 0 1-.754-.463 12.485 12.485 0 0 0-1.084-1.026 7.685 7.685 0 0 0-1.584-1.027 4.846 4.846 0 0 0-2.194-.463 4.154 4.154 0 0 0-2.341.671 4.55 4.55 0 0 0-1.646 1.9 16.073 16.073 0 0 0-1.387 7.463 22.62 22.62 0 0 0 .36 4.286c.19 1.083.548 2.123 1.06 3.079a4.604 4.604 0 0 0 1.697 1.83 4.225 4.225 0 0 0 2.343.615 4.555 4.555 0 0 0 2.184-.505 8.636 8.636 0 0 0 1.628-1.112c.46-.403.846-.768 1.159-1.095.312-.328.556-.493.731-.493a.35.35 0 0 1 .262.114c.09.108.153.238.185.379.059.22.095.446.11.674.028.277.039.599.039.975ZM387.724 190.063a24.035 24.035 0 0 1-.634 5.692 13.956 13.956 0 0 1-1.889 4.483 9.038 9.038 0 0 1-3.145 2.937 8.835 8.835 0 0 1-4.38 1.053 9.106 9.106 0 0 1-4.226-.928 8.069 8.069 0 0 1-3.003-2.699 12.762 12.762 0 0 1-1.792-4.301 25.373 25.373 0 0 1-.591-5.734c-.016-1.918.193-3.83.622-5.692a13.845 13.845 0 0 1 1.878-4.483 8.968 8.968 0 0 1 3.135-2.923 8.927 8.927 0 0 1 4.39-1.04 9.119 9.119 0 0 1 4.227.927 8.061 8.061 0 0 1 3.003 2.699 12.892 12.892 0 0 1 1.802 4.301c.421 1.869.624 3.786.603 5.708Zm-3.735.309a24.212 24.212 0 0 0-.296-3.879 11.304 11.304 0 0 0-.986-3.205 5.58 5.58 0 0 0-1.851-2.177 5.013 5.013 0 0 0-2.909-.802 5.076 5.076 0 0 0-2.766.736 5.649 5.649 0 0 0-1.906 2.066c-.532.98-.909 2.047-1.114 3.158a20.533 20.533 0 0 0-.363 3.992 24.414 24.414 0 0 0 .296 3.906c.166 1.114.501 2.192.992 3.19a5.69 5.69 0 0 0 1.862 2.165 5.022 5.022 0 0 0 2.91.801 5.07 5.07 0 0 0 2.759-.736 5.632 5.632 0 0 0 1.918-2.052c.533-.974.906-2.039 1.102-3.148.244-1.322.361-2.667.351-4.015h.001ZM409.96 202.993a.753.753 0 0 1-.088.379.714.714 0 0 1-.284.267 1.626 1.626 0 0 1-.546.168 5.543 5.543 0 0 1-.873.057c-.3.004-.599-.014-.896-.057a1.626 1.626 0 0 1-.546-.168.714.714 0 0 1-.284-.267.766.766 0 0 1-.088-.379V188.18a18.48 18.48 0 0 0-.262-3.485 8.406 8.406 0 0 0-.764-2.277 3.777 3.777 0 0 0-1.299-1.463 3.378 3.378 0 0 0-1.846-.505 4.06 4.06 0 0 0-2.709 1.237 17.345 17.345 0 0 0-2.839 3.625v17.682a.756.756 0 0 1-.088.379.708.708 0 0 1-.284.267 1.626 1.626 0 0 1-.546.168 5.596 5.596 0 0 1-.896.057 5.559 5.559 0 0 1-.873-.057 1.757 1.757 0 0 1-.557-.168.626.626 0 0 1-.284-.267.823.823 0 0 1-.076-.379v-25.298a.963.963 0 0 1 .065-.38.654.654 0 0 1 .262-.281c.155-.092.326-.15.503-.169a7.688 7.688 0 0 1 1.605 0c.174.015.343.073.493.169a.698.698 0 0 1 .251.281.753.753 0 0 1 .076.38v3.344a13.32 13.32 0 0 1 3.31-3.499 5.919 5.919 0 0 1 3.331-1.11 5.729 5.729 0 0 1 3.149.762 6.236 6.236 0 0 1 2.333 2.386 10.573 10.573 0 0 1 1.194 3.358c.259 1.526.38 3.074.36 4.625l-.004 15.431ZM428.894 196.105c.019 1.18-.17 2.352-.556 3.457a7.065 7.065 0 0 1-1.584 2.559 6.72 6.72 0 0 1-2.446 1.573 8.816 8.816 0 0 1-3.125.535 9.2 9.2 0 0 1-1.997-.211 9.587 9.587 0 0 1-1.704-.533 7.887 7.887 0 0 1-1.282-.675 3.796 3.796 0 0 1-.763-.631 1.757 1.757 0 0 1-.35-.787 6.831 6.831 0 0 1-.109-1.377 7.952 7.952 0 0 1 .043-.9c.021-.199.058-.396.109-.589a.648.648 0 0 1 .186-.324.422.422 0 0 1 .273-.098c.266.052.512.184.71.38.313.252.699.529 1.158.829.517.33 1.062.607 1.627.828a5.705 5.705 0 0 0 2.162.38 5.123 5.123 0 0 0 1.66-.252c.472-.156.91-.409 1.289-.746.371-.338.66-.767.841-1.25a4.97 4.97 0 0 0 .296-1.799 3.534 3.534 0 0 0-.426-1.799 4.685 4.685 0 0 0-1.125-1.294 8.768 8.768 0 0 0-1.577-.998 155.81 155.81 0 0 1-1.801-.912 17.025 17.025 0 0 1-1.814-1.083 7.288 7.288 0 0 1-1.582-1.473 7 7 0 0 1-1.126-2.081 8.752 8.752 0 0 1-.426-2.895 9.093 9.093 0 0 1 .448-2.853 6.83 6.83 0 0 1 1.343-2.389 6.597 6.597 0 0 1 2.239-1.644 7.423 7.423 0 0 1 3.134-.618c.53 0 1.058.056 1.577.168.483.1.958.241 1.419.421.378.145.741.329 1.085.548.24.151.466.325.677.52.123.111.226.244.305.394.053.12.09.247.11.379.021.14.043.313.065.52a9.458 9.458 0 0 1 0 1.588c-.015.196-.051.39-.109.576a.762.762 0 0 1-.186.324.353.353 0 0 1-.241.097 1.066 1.066 0 0 1-.567-.309 7.803 7.803 0 0 0-.961-.661 9.568 9.568 0 0 0-1.387-.661 4.993 4.993 0 0 0-1.824-.309 4.506 4.506 0 0 0-1.616.266 2.94 2.94 0 0 0-1.148.759 3.286 3.286 0 0 0-.677 1.167 4.514 4.514 0 0 0-.228 1.461c-.022.645.13 1.284.436 1.841.299.507.684.95 1.136 1.307a8.883 8.883 0 0 0 1.594 1.012c.598.301 1.206.61 1.825.927.618.318 1.23.674 1.835 1.069a7.151 7.151 0 0 1 1.604 1.433 6.713 6.713 0 0 1 1.126 2.024c.301.901.445 1.853.425 2.809ZM443.749 201.138c.008.433-.022.866-.088 1.293a1.648 1.648 0 0 1-.262.703 1.724 1.724 0 0 1-.524.421c-.254.14-.521.249-.797.324a9.032 9.032 0 0 1-.951.211 6.628 6.628 0 0 1-3.625-.436 4.377 4.377 0 0 1-1.791-1.579 7.354 7.354 0 0 1-1.017-2.67 20.078 20.078 0 0 1-.316-3.809v-14.779h-2.752c-.218 0-.394-.151-.525-.451a3.972 3.972 0 0 1-.197-1.462c-.004-.3.014-.601.054-.898.028-.206.076-.409.142-.605a.682.682 0 0 1 .23-.337.543.543 0 0 1 .317-.099h2.73v-6.014a.865.865 0 0 1 .077-.366.68.68 0 0 1 .284-.295c.174-.096.362-.158.557-.183.289-.041.582-.06.874-.057.299-.004.598.015.895.057.191.023.376.085.546.183.117.07.215.172.285.295a.795.795 0 0 1 .086.366v6.014h5.046a.496.496 0 0 1 .306.099.781.781 0 0 1 .228.337c.075.194.123.397.143.605.032.298.046.598.044.898a3.93 3.93 0 0 1-.197 1.462c-.132.3-.306.45-.524.451h-5.041v14.109a10.07 10.07 0 0 0 .6 3.95c.189.43.496.789.88 1.027.385.239.829.346 1.272.307.303.005.604-.038.896-.126a6.36 6.36 0 0 0 1.223-.535.808.808 0 0 1 .394-.126.36.36 0 0 1 .208.071.484.484 0 0 1 .153.267c.044.175.077.353.098.534.03.279.043.561.039.843ZM460.021 179.355c0 .412-.008.759-.023 1.039a3.064 3.064 0 0 1-.087.661 1.053 1.053 0 0 1-.164.366.337.337 0 0 1-.122.097.316.316 0 0 1-.151.029.988.988 0 0 1-.425-.126 7.529 7.529 0 0 0-1.278-.493 3.11 3.11 0 0 0-.852-.111 2.226 2.226 0 0 0-1.071.28 4.244 4.244 0 0 0-1.102.928 10.974 10.974 0 0 0-1.213 1.714 40.484 40.484 0 0 0-1.398 2.614v16.64a.751.751 0 0 1-.088.379.7.7 0 0 1-.284.267 1.645 1.645 0 0 1-.545.169 5.713 5.713 0 0 1-.896.056 5.685 5.685 0 0 1-.874-.056 1.785 1.785 0 0 1-.557-.169.624.624 0 0 1-.283-.267.823.823 0 0 1-.076-.379v-25.297a.963.963 0 0 1 .065-.38.66.66 0 0 1 .262-.281 1.24 1.24 0 0 1 .502-.168c.268-.032.538-.046.809-.042a6.25 6.25 0 0 1 .797.042c.174.014.343.072.493.168a.704.704 0 0 1 .251.281.753.753 0 0 1 .077.38v3.684c.447-.864.954-1.692 1.518-2.475a9.337 9.337 0 0 1 1.343-1.502c.37-.336.796-.593 1.256-.759.405-.139.829-.21 1.255-.211.216.002.432.016.646.042.254.032.505.083.752.155.242.067.479.152.71.253.165.063.317.158.449.281a.82.82 0 0 1 .175.267c.034.105.059.213.075.323.028.191.042.383.044.576.006.252.01.593.01 1.025ZM480.953 202.994a.85.85 0 0 1-.077.379.634.634 0 0 1-.273.267 1.589 1.589 0 0 1-.512.168 4.387 4.387 0 0 1-.776.057 4.699 4.699 0 0 1-.82-.057 1.44 1.44 0 0 1-.502-.168.571.571 0 0 1-.251-.267.96.96 0 0 1-.066-.379v-3.345a13.448 13.448 0 0 1-3.32 3.486 5.926 5.926 0 0 1-3.32 1.097 6.114 6.114 0 0 1-3.309-.842 6.402 6.402 0 0 1-2.173-2.292 10.682 10.682 0 0 1-1.191-3.368 25.99 25.99 0 0 1-.361-4.68v-15.353a.868.868 0 0 1 .077-.38.715.715 0 0 1 .296-.281 1.49 1.49 0 0 1 .569-.168 8.935 8.935 0 0 1 1.746 0c.194.016.384.073.557.168a.812.812 0 0 1 .296.281.754.754 0 0 1 .087.38v14.725a19.959 19.959 0 0 0 .252 3.556 7.77 7.77 0 0 0 .763 2.277 4.028 4.028 0 0 0 1.301 1.462 3.241 3.241 0 0 0 1.834.519 4.024 4.024 0 0 0 2.698-1.236 18.124 18.124 0 0 0 2.851-3.626v-17.681a.85.85 0 0 1 .076-.38.708.708 0 0 1 .296-.281c.174-.093.363-.15.557-.169a9.22 9.22 0 0 1 1.758 0 1.3 1.3 0 0 1 .546.169.93.93 0 0 1 .295.281.689.689 0 0 1 .099.38l-.003 25.301ZM501.752 199.143c0 .316-.008.594-.022.828-.01.199-.035.396-.076.59a2.635 2.635 0 0 1-.131.421 2.786 2.786 0 0 1-.35.535 6.086 6.086 0 0 1-.96.899 9.025 9.025 0 0 1-1.716 1.04 8.234 8.234 0 0 1-2.314.689l.567 1.629c.256.686.478 1.385.667 2.095.132.508.202 1.032.208 1.559a5.61 5.61 0 0 1-.307 1.913 3.875 3.875 0 0 1-.874 1.418c-.39.392-.851.693-1.354.886a4.807 4.807 0 0 1-1.768.309 8 8 0 0 1-1.432-.126 12.904 12.904 0 0 1-1.183-.268 3.068 3.068 0 0 1-.677-.252.637.637 0 0 1-.262-.281 1.495 1.495 0 0 1-.11-.421 5.43 5.43 0 0 1-.033-.675 3.086 3.086 0 0 1 .143-1.166.514.514 0 0 1 .193-.224.478.478 0 0 1 .277-.072h2.708c.396.025.786-.11 1.092-.379.138-.148.245-.327.313-.523.068-.197.096-.406.081-.615a4.08 4.08 0 0 0-.13-.914 11.513 11.513 0 0 0-.35-1.167l-1.027-2.923c-1.428-.321-2.726-1.112-3.712-2.261a11.308 11.308 0 0 1-2.229-4.512 29.234 29.234 0 0 1-.032-12.946 13.34 13.34 0 0 1 1.943-4.398 7.925 7.925 0 0 1 2.906-2.544 8.022 8.022 0 0 1 3.614-.829 7.349 7.349 0 0 1 1.824.225 8.293 8.293 0 0 1 1.627.59c.469.226.913.509 1.322.842.306.24.588.514.842.815.135.166.255.344.359.534.071.148.127.303.165.464.046.198.075.4.087.604.015.225.022.506.021.842.031.52-.036 1.04-.197 1.531-.131.291-.295.436-.48.436a1.154 1.154 0 0 1-.754-.463 12.485 12.485 0 0 0-1.084-1.026 7.685 7.685 0 0 0-1.584-1.027 4.846 4.846 0 0 0-2.194-.463 4.154 4.154 0 0 0-2.341.671 4.55 4.55 0 0 0-1.646 1.9 16.074 16.074 0 0 0-1.388 7.463 22.54 22.54 0 0 0 .361 4.286c.19 1.083.548 2.123 1.06 3.079a4.61 4.61 0 0 0 1.697 1.83 4.225 4.225 0 0 0 2.343.615 4.555 4.555 0 0 0 2.184-.505 8.683 8.683 0 0 0 1.628-1.112c.46-.403.846-.768 1.157-1.095.314-.328.558-.493.733-.493a.346.346 0 0 1 .261.114c.09.108.154.238.186.379.058.22.095.446.11.674.027.277.038.599.038.975ZM524.459 190.064a24.072 24.072 0 0 1-.633 5.691 14.018 14.018 0 0 1-1.89 4.484 9.057 9.057 0 0 1-3.145 2.937 8.838 8.838 0 0 1-4.381 1.053 9.107 9.107 0 0 1-4.226-.929 8.068 8.068 0 0 1-3.004-2.698 12.783 12.783 0 0 1-1.79-4.302 25.366 25.366 0 0 1-.592-5.733c-.016-1.918.193-3.83.622-5.692a13.862 13.862 0 0 1 1.879-4.484 8.966 8.966 0 0 1 3.135-2.922 8.92 8.92 0 0 1 4.389-1.04 9.119 9.119 0 0 1 4.227.927 8.054 8.054 0 0 1 3.003 2.699 12.915 12.915 0 0 1 1.803 4.301c.421 1.869.624 3.786.603 5.708Zm-2.555-23.302c.099 1.61-.3 3.21-1.138 4.553a3.73 3.73 0 0 1-1.358 1.194 3.485 3.485 0 0 1-1.722.385 3.67 3.67 0 0 1-1.439-.268 4.725 4.725 0 0 1-1.158-.688 8.593 8.593 0 0 1-.962-.899c-.292-.319-.58-.619-.863-.901a5.405 5.405 0 0 0-.84-.688 1.636 1.636 0 0 0-.896-.266 1.175 1.175 0 0 0-.734.198 1.299 1.299 0 0 0-.489.616 5.566 5.566 0 0 0-.35 2.164c.001.119-.013.238-.044.352a.4.4 0 0 1-.186.24 1.06 1.06 0 0 1-.415.111c-.181.02-.412.029-.69.029a3.442 3.442 0 0 1-.591-.042.761.761 0 0 1-.382-.17.726.726 0 0 1-.207-.364 2.277 2.277 0 0 1-.065-.605 7.973 7.973 0 0 1 1.091-4.44 3.657 3.657 0 0 1 1.36-1.263 3.404 3.404 0 0 1 1.764-.397c.714-.02 1.419.18 2.03.577.55.368 1.066.791 1.541 1.263.459.459.889.885 1.289 1.278.345.37.811.581 1.3.591.243.008.484-.058.694-.19a1.35 1.35 0 0 0 .495-.554 4.764 4.764 0 0 0 .404-2.21.706.706 0 0 1 .04-.335.667.667 0 0 1 .19-.27 2.04 2.04 0 0 1 .993-.155c.369-.04.74.033 1.071.21.179.142.267.457.267.944Zm-1.183 23.611a24.08 24.08 0 0 0-.296-3.879 11.293 11.293 0 0 0-.98-3.205 5.608 5.608 0 0 0-1.852-2.178 5.029 5.029 0 0 0-2.91-.802 5.087 5.087 0 0 0-2.766.737 5.685 5.685 0 0 0-1.907 2.066c-.531.98-.907 2.047-1.113 3.158a20.453 20.453 0 0 0-.363 3.991 24.32 24.32 0 0 0 .295 3.907c.166 1.114.5 2.192.992 3.19a5.706 5.706 0 0 0 1.862 2.165 5.03 5.03 0 0 0 2.91.801 5.07 5.07 0 0 0 2.759-.737 5.627 5.627 0 0 0 1.917-2.051c.533-.974.906-2.039 1.102-3.148.245-1.322.36-2.667.35-4.015ZM546.528 189.247a2.28 2.28 0 0 1-.429 1.561 1.34 1.34 0 0 1-.442.341c-.168.079-.35.121-.534.122h-12.947a20.01 20.01 0 0 0 .329 3.795 8.326 8.326 0 0 0 1.099 2.896 5.207 5.207 0 0 0 1.997 1.854 6.382 6.382 0 0 0 3.007.647 9.65 9.65 0 0 0 2.502-.295 12.414 12.414 0 0 0 1.899-.661c.535-.244.973-.464 1.316-.661.237-.158.503-.259.78-.295a.426.426 0 0 1 .275.099.63.63 0 0 1 .186.295c.052.178.085.362.099.548.021.235.032.52.032.858 0 .244-.007.454-.021.631a6.32 6.32 0 0 1-.055.478 1.55 1.55 0 0 1-.108.379 1.72 1.72 0 0 1-.197.324 3.128 3.128 0 0 1-.709.505 9.009 9.009 0 0 1-1.53.69c-.71.247-1.434.449-2.168.604-.867.182-1.749.272-2.632.267a9.768 9.768 0 0 1-4.249-.871 8.06 8.06 0 0 1-3.068-2.586 12.165 12.165 0 0 1-1.878-4.301 25.375 25.375 0 0 1-.634-6.016 24.157 24.157 0 0 1 .654-5.861 13.777 13.777 0 0 1 1.891-4.413 8.706 8.706 0 0 1 2.981-2.781 7.908 7.908 0 0 1 3.91-.971 7.665 7.665 0 0 1 3.942.956 7.96 7.96 0 0 1 2.676 2.572 11.59 11.59 0 0 1 1.54 3.795c.336 1.525.501 3.086.493 4.652l-.007.843Zm-3.626-1.376a10.258 10.258 0 0 0-1.264-5.734c-.715-1.005-1.744-1.702-2.899-1.965a4.662 4.662 0 0 0-3.397.53 5.525 5.525 0 0 0-1.693 1.716 8.752 8.752 0 0 0-1.055 2.487 13.17 13.17 0 0 0-.418 2.966h10.726ZM564.348 196.104a9.983 9.983 0 0 1-.557 3.457 7.054 7.054 0 0 1-1.583 2.558 6.717 6.717 0 0 1-2.447 1.574 8.804 8.804 0 0 1-3.123.534 9.58 9.58 0 0 1-3.702-.744 7.804 7.804 0 0 1-1.282-.674 3.807 3.807 0 0 1-.764-.632 1.74 1.74 0 0 1-.349-.787 6.826 6.826 0 0 1-.11-1.377c-.003-.3.012-.601.045-.899.02-.2.057-.397.108-.59a.663.663 0 0 1 .185-.324.428.428 0 0 1 .274-.098c.266.052.511.184.709.38.313.253.699.529 1.158.829.517.33 1.062.607 1.628.829a5.726 5.726 0 0 0 2.163.38 5.15 5.15 0 0 0 1.659-.253 3.663 3.663 0 0 0 1.288-.745c.371-.338.66-.767.842-1.25a4.994 4.994 0 0 0 .296-1.799 3.536 3.536 0 0 0-.426-1.8 4.684 4.684 0 0 0-1.126-1.293 8.679 8.679 0 0 0-1.577-.998c-.582-.29-1.183-.595-1.802-.912a17.351 17.351 0 0 1-1.813-1.083 7.322 7.322 0 0 1-1.583-1.474 7.02 7.02 0 0 1-1.125-2.081 8.749 8.749 0 0 1-.426-2.895 9.086 9.086 0 0 1 .448-2.852 6.812 6.812 0 0 1 1.343-2.389 6.57 6.57 0 0 1 2.239-1.644 7.42 7.42 0 0 1 3.133-.619c.53 0 1.058.056 1.577.168.484.101.959.241 1.421.421.378.145.741.329 1.085.549.24.151.467.325.678.52.123.11.226.243.304.393.054.12.091.248.111.379.02.141.043.316.065.52.024.252.035.506.032.759a9.16 9.16 0 0 1-.032.829c-.015.197-.052.39-.11.577a.758.758 0 0 1-.186.323.347.347 0 0 1-.24.098 1.073 1.073 0 0 1-.567-.309 7.814 7.814 0 0 0-.962-.661 9.353 9.353 0 0 0-1.387-.659 4.989 4.989 0 0 0-1.823-.31 4.529 4.529 0 0 0-1.616.267 2.937 2.937 0 0 0-1.148.758 3.282 3.282 0 0 0-.677 1.168 4.522 4.522 0 0 0-.23 1.462c-.022.645.13 1.284.436 1.84.3.507.685.951 1.137 1.307a8.833 8.833 0 0 0 1.594 1.013c.596.301 1.204.61 1.824.927.619.317 1.231.673 1.835 1.068.599.39 1.141.873 1.606 1.434a6.708 6.708 0 0 1 1.124 2.024 8.3 8.3 0 0 1 .426 2.806Z"
    />
  </SvgWrapper>
);

export default Logo