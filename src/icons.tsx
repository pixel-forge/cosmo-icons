import * as React from 'react';
import './icons.scss';
import {
	FilterOutline,
	FilterRegular,
	FilterSolid,
	GearOutline,
	GearRegular,
	GearSolid,
	GearsOutline,
	GearsRegular,
	GearsSolid,
	MenuOutline,
	MenuRegular,
	MenuSolid,
	SearchOutline,
	SearchRegular,
	SearchSolid,
	VOutline,
	VRegular,
	VSolid, XOutline, XRegular, XSolid
} from './icon-components';

type CosmoIconSupplier = (props: React.HTMLProps<HTMLDivElement>) => React.JSX.Element;

const cosmoIcon = (Icon: React.ElementType): CosmoIconSupplier => (props) => {
	const {className, ...rest} = props;
	const _className = `cosmo-icon ${className ?? ''}`.trim();
	return <div className={_className} {...rest}><Icon/></div>;
};

export const CosmoIcons = {
	gear: {regular: cosmoIcon(GearRegular), solid: cosmoIcon(GearSolid), outline: cosmoIcon(GearOutline)},
	gears: {regular: cosmoIcon(GearsRegular), solid: cosmoIcon(GearsSolid), outline: cosmoIcon(GearsOutline)},
	search: {regular: cosmoIcon(SearchRegular), solid: cosmoIcon(SearchSolid), outline: cosmoIcon(SearchOutline)},
	menu: {regular: cosmoIcon(MenuRegular), solid: cosmoIcon(MenuSolid), outline: cosmoIcon(MenuOutline)},
	filter: {regular: cosmoIcon(FilterRegular), solid: cosmoIcon(FilterSolid), outline: cosmoIcon(FilterOutline)},
	v: {regular: cosmoIcon(VRegular), solid: cosmoIcon(VSolid), outline: cosmoIcon(VOutline)},
	x: {regular: cosmoIcon(XRegular), solid: cosmoIcon(XSolid), outline: cosmoIcon(XOutline)},
};