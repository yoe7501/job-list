import React, {ReactNode } from 'react'

interface Props{
    children: ReactNode,
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}



const Button = ({children, filters, setFilters} : Props) => {
    const handleFilterClick = () => {
        const filter = children as string;
        if(!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    };
  return (
    <button className='filterButton' disabled={filters.length >= 1? true: false} onClick={handleFilterClick}>{children}</button>
  )
}

export default Button