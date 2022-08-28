import emoji from "react-easy-emoji";

export const greetings = {
	name: "Neeraj Kumar",
	title: "Hi all, I'm Neeraj Kumar",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Golang, Nodejs, React.js, Next.js.",
	resumeLink:
		"https://drive.google.com/file/d/13LDSJ5Loyp9gJf2MkhX9G4KE9fsKRWRQ/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Neeraj1997-dev",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/erneeraj.yadav.35",
	twitter: "https://twitter.com/Neeraj85539329",
	github: "https://github.com/Neeraj1997-dev",
	linkedin: "https://www.linkedin.com/in/neeraj-kumar-251165167/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building RESTful APIs in Golang & Fiber/Gin/Lambda Framework"
				),
				emoji("⚡ Building responsive websites using React/Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Node & Exprerss REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "Golang",
					fontAwesomeClassname: "fa-brands fa-golang",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Kurukshetra University",
		subHeader: "Kurukshetra University in Computer Science",
		duration: "September 2014 - April 2018",
		grade: "Grade A"
	},
];

export const experience = [
	{
		role: "Backend Developer",
		company: "SPINEOR",
		companylogo: "/img/icons/common/spienro.jpeg",
		date: "Oct 2018 – July 2019",
		desc: "",
	},
	{
		role: "Backend Developer",
		company: "Access Infotech Private Limited",
		companylogo: "/img/icons/common/ACCESS.jpeg",
		date: "July 2019 – July 2020",
		desc: "",
	},
	{
		role: "Full Stack Developer",
		company: "Kurlon Enterprise Limited",
		companylogo: "/img/icons/common/kurlon.jpeg",
		date: "July 2020 - Fab 2022",
		desc: "",
	},
	{
		role: "Full Stack Developer",
		company: "Scoreplus",
		companylogo: "/img/icons/common/scoreplus.jpeg",
		date: "March 2022",
		desc: "",
	},
];

export const projects = [
	{
		name: "The Autoparts Shop",
		desc: "The Auto Parts Shop offers a wide variety of automotive parts and accessors for Car's, Suv's and Trucks . Shop online now! Get Delivered to your Location.",
		link: "https://www.theautopartsshop.com/",
	},
	{
		name: "Home Komforts",
		desc: "Home Komforts offers an extensive and impressive range of modular furniture, home furnishings, home accessories and mattresses. ",
		link: "https://www.homekomforts.com/",
	},
	{
		name: "Kurlon: Buy Mattress & Pillows online",
		desc: "Kurlon Enterprise Limited is India's best selling mattress company which provides a wide range of variety like coir mattress, foam mattress and spring ",
		link: "https://www.homekomforts.com/",
	},
	{
		name: "Soho Mattress",
		desc: "SOHO was designed and developed by young entrepreneurs, who would dream all day and stay awake all night. Backed up by large conglomerates and mentored by Industry veterans globally. ",
		link: "http://sohomattress.in/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	}
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Neeraj Kumar",
	description:
		"A passionate Full Stack Web Developer",
	author: "Neeraj Kumar",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://neeraj-kumar.vercel.app/",
	keywords: [
		"Neeraj Kumar",
		"Neeraj Kumar",
		"@1Neeraj Kumar100",
		"1Neeraj Kumar100",
		"Portfolio",
		"Neeraj Kumar Tauqeer Portfolio",
	],
}