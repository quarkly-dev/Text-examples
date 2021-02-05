import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack, Menu, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaAdn, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdHelp, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"test"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0px 0px 0px" background-color="--color-darkL1" position="relative" inner-min-width="100%">
			{"  "}
			<Components.ComponentExample />
			<Components.NewComp1>
				<Override slot="icon" color="--green" category="fa" icon={FaAdn} />
			</Components.NewComp1>
		</Section>
		<Components.CardWorkStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
			<Override slot="text">
				INTO THE WILD
			</Override>
			<Override slot="text1">
				A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
			</Override>
			<Override slot="button">
				JOIN
			</Override>
		</Components.CardWorkStep4>
		<Components.Block1 />
		<Components.Block2 />
		<Components.Block3 />
		<Components.Block4 />
		<Components.Block5 />
		<Components.Block6 />
		<Components.Block7 />
		<Components.Block8 />
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Q&A
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Is there life on Mars?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					How much salt is in the ocean?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Why is the sky blue?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Text as="h1" font="--headline1" margin="0 0 24px 0">
				FAQs
			</Text>
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						Is there life on Mars?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						Why is the sky blue?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h3" font="--headline3" margin="12px 0">
						When will we get there?
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Contact
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Email us, we would love to hear form you
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree>
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								hello@company.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+1 (234) 567-89-00
							<br />
							+1 (234) 567-89-00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Hi! I'm a heading. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%">
					<Text margin="0px" max-width="600px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				We are cute
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						CEO
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Nathan K. Joe
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						David R. Lema
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Marketing
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Janet E. Morey
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Claire R. Peery
						<br />
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack>
				<StackItem width="50%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Nathan K. Joe
							</Text>
							<Text color="--grey" margin="0">
								CEO
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								David R. Lema
							</Text>
							<Text color="--grey" margin="0">
								Developer
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Janet E. Morey
							</Text>
							<Text color="--grey" margin="0">
								Marketing
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Claire R. Peery
							</Text>
							<Text color="--grey" margin="0">
								Designer
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text color="--grey" letter-spacing="1px" text-transform="uppercase" margin="0 0 10px 0">
						Meet our team
					</Text>
					<Text as="h2" font="--headline2" md-font="--headline3" margin="0">
						The smartest people work every day to provide the best service and to make our clients happy
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
						17
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
						17
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Heading
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});