import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Nevrada';
        src: url('/fonts/AL_Nevrada.otf') format('opentype');
      }

      /* latin */
      @font-face {
        font-family: 'Highlight';
        src: url('/fonts/Hightlight.otf') format('opentype');
      }

      /* latin */
      @font-face {
        font-family: 'FivoBold';
        src: url('/fonts/FivoSans-Bold.otf') format('opentype');
      }

      /* latin */
      @font-face {
        font-family: 'FivoRegular';
        src: url('/fonts/FivoSans-Regular.otf') format('opentype');
      }

      /* latin */
      @font-face {
        font-family: 'FivoLight';
        src: url('/fonts/FivoSans-Light.otf') format('opentype');
      }

      /* latin */
      @font-face {
        font-family: 'FivoMedium';
        src: url('/fonts/FivoSans-Medium.otf') format('opentype');
      }


      `}
  />
)

export default Fonts