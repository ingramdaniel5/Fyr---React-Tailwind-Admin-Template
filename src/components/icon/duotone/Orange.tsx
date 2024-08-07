import React, { SVGProps } from 'react';

const SvgOrange = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z'
					fill='currentColor'
				/>
				<path
					d='M12 9.667c-.667-1.022-1-1.786-1-2.292C11 6.615 11.448 6 12 6s1 .616 1 1.375c0 .506-.333 1.27-1 2.292zM12 14c.667 1.022 1 1.785 1 2.292 0 .76-.448 1.375-1 1.375s-1-.616-1-1.375c0-.507.333-1.27 1-2.292zm2.333-2c1.022-.667 1.786-1 2.292-1 .76 0 1.375.448 1.375 1s-.616 1-1.375 1c-.506 0-1.27-.333-2.292-1zM10 12c-1.022.667-1.785 1-2.292 1-.76 0-1.375-.448-1.375-1s.616-1 1.375-1c.507 0 1.27.333 2.292 1zm3.65-1.65c.25-1.194.555-1.97.913-2.327.537-.537 1.29-.656 1.68-.266.39.39.271 1.143-.266 1.68-.358.358-1.133.662-2.327.913zm-3.064 3.064c-.251 1.194-.556 1.97-.914 2.328-.537.537-1.288.655-1.679.265-.39-.39-.272-1.142.265-1.68.358-.357 1.134-.662 2.328-.913zm3.064.236c1.194.25 1.97.555 2.327.913.537.537.656 1.29.266 1.68-.39.39-1.143.271-1.68-.266-.358-.358-.662-1.133-.913-2.327zm-3.064-3.064c-1.194-.251-1.97-.556-2.328-.914-.537-.537-.655-1.288-.265-1.679.39-.39 1.142-.272 1.68.265.357.358.662 1.134.913 2.328z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgOrange;
