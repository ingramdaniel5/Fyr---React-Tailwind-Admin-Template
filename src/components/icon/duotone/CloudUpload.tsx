import React, { SVGProps } from 'react';

const SvgCloudUpload = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.747 13.043A6 6 0 1114.811 6.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.032 19.492h1.956V21.5a.5.5 0 00.5.5h1.024a.5.5 0 00.5-.5v-2.008h1.956a.5.5 0 00.382-.823l-2.968-3.505a.5.5 0 00-.764 0L8.65 18.669a.5.5 0 00.382.823z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCloudUpload;
