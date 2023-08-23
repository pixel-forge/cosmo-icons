import * as React from 'react';
import {EmailOutline, EmailSolid, GearOutline, GearSolid, GearsOutline, GearsSolid, SearchOutline, SearchSolid} from './icon-components';

type CosmoIconSupplier = (props: React.HTMLProps<HTMLDivElement>) => React.JSX.Element;

type CosmoIcon = {
	solid: CosmoIconSupplier;
	outline?: CosmoIconSupplier;
}

const cosmoIcon = (Icon: React.ElementType): CosmoIconSupplier => (props) => {
	const {className, ...rest} = props;
	const _className = `cosmo-icon ${className ?? ''}`.trim();
	return <div className={_className} {...rest}><Icon/></div>;
};

export const CosmoIcons: { [K: string]: CosmoIcon } = {
	email: {solid:cosmoIcon(EmailSolid),outline:cosmoIcon(EmailOutline)},
	gear: {solid: cosmoIcon(GearSolid), outline: cosmoIcon(GearOutline)},
	gears: {solid: cosmoIcon(GearsSolid), outline: cosmoIcon(GearsOutline)},
	search: {solid:cosmoIcon(SearchSolid),outline:cosmoIcon(SearchOutline)},
};