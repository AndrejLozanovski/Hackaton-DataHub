'use client'
import React, { ReactNode } from 'react';
import Link from 'next/link';
import './ComponentsStyle/breadcrumbs.css'
import { usePathname } from 'next/navigation';


type Page = {
    href: string;
    name: string;
};

type TBreadCrumbProps = {
    homeElement?: ReactNode;
    pages: Page[];
    separator: ReactNode;
    containerClasses?: string;
    capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
    homeElement,
    pages,
    separator,
    containerClasses,
    capitalizeLinks,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <div>
            <ul className={`list ${containerClasses ?? ''}`} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {pages.map((page, index) => (
                    <li className={`p-0`} key={index}>
                        <Link href={page.href}>{page.name}/</Link>
                    </li>
                ))}
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const itemClasses = paths === href ? `list-group-item active` : `list-group-item`;
                    const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default NextBreadcrumb;



