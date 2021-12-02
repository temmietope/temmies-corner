import styled from 'styled-components';

export const HomeHeader = styled.div`
	padding: 0 var(--padding);
	height: 35rem;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;

	a:not(.brand) {
		color: ${props => props.theme.paragraph};
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.15em;
		display: inline-block;
		padding: 6px 0;
		margin-right: 1rem;
		position: relative;
	}

	a:not(.brand):after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}

	a:hover:after {
		width: 100%;
		left: 0;
	}

  a:after {
		background: black;
	}

	@media ${props => props.theme.breakpoints.tablet} {
		height: 33rem;
	}

	@media ${props => props.theme.breakpoints.mobile} {
		height: 100%;
		padding: 5%;
		display: flex;
		flex-flow: column-reverse;
	}
`;

export const HomeHeaderProfileSummary = styled.div`
	flex: 1;
	box-sizing: border-box;
	transition: all 0.5s;
	.intro {
		h1 {
			color: ${props => props.theme.paragraph};
			font-weight: 700;
			span {
				color: ${props => props.theme.header};
			}
		}
		h2 {
			color: ${props => props.theme.paragraph};
		}

		.summary {
			margin: 4% 0;
		}
		.role {
			font-weight: bold;
			margin-top: 1%;
		}
	}

	.contact__links {
		display: flex;
		font-size: 1rem;
	}
	@media ${props => props.theme.breakpoints.mobile} {
		margin: 5% 2%;
		text-align: center;
		.contact__links {
			font-size: 0.8rem;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const HomeHeaderAvatar = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin-left: 5%;
	width: 18rem;
	height: 18rem;
	transition: all 0.5s;

	.gatsby-image-wrapper {
		transition: all 0.5s;
	}

	@media ${props => props.theme.breakpoints.tablet} {
		width: 15rem;
		height: 15rem;
	}

	@media ${props => props.theme.breakpoints.mobile} {
		margin-left: 0;

		width: 10rem;
		height: 10rem;
	}
`;
