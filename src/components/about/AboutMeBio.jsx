import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					Passionate and seasoned Mobile Developer with over 8 years of experience in IT Industry.<br/>I have strong background in Mobile App Development and deep understanding of Android, iOS, React-Native, Flutter.
				</p>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					I specialize in building apps using the latest technologies and best practices.
				</p>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					Dedicated to delivering high-quality solutions that meet client requirements and enhance the user experience.
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
