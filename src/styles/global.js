import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 30px;
}

.bold {
  font-weight: 700;
}

.black {
  font-weight: 800;
}

/* a {
  display: inline-block;
  padding-bottom: 2px;
  margin-bottom: 2px;
	text-decoration: none;
	color: --var(secondaryColor);

	&.dash {
		border-bottom: 2px dashed currentColor;

		&:hover {
      border-bottom: 2px solid;
    }
	}
} */

body {
  background-color: var(--primaryBackground);
	color: var(--primaryColor);
	font-family: 'Baloo 2', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body.dark {
  --primaryColor: #fff;
  --secondaryColor: #03a9f4;
  --inverseColor: #222;
  --primaryBackground: #0d2538;
  --secondaryBackground: #0f2d44;
  --inverseBackground: #fdfdfd;
}

body.light {
  --primaryColor: #222;
  --secondaryColor: #03a9f4;
  --inverseColor: #fff;
  --inverseBackground: #0d2538;
  --primaryBackground: #fdfdfd;
  --secondaryBackground: #eee;
}
`

export default GlobalStyles
