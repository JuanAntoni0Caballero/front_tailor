import Image from "next/image";
import BlackLogo from '../../../public/logo_black.svg';
import WhiteLogo from '../../../public/logo_white.svg';
import BlueLogo from '../../../public/logo_blue.svg';

interface LogoProps {
    color?: string;
    width?: number;
    height?: number
}

export default function LogoComponent({ color, width, height }: LogoProps) {
    const logo = color === 'black' ? BlackLogo : color === 'white' ? WhiteLogo : BlueLogo;
    return (
        <div>
            <Image
                src={logo}
                width={width}
                height={height}
                alt="logo"
            />
        </div>
    );
}
