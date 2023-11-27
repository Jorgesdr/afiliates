import { useState } from 'react'

export function usePagination ({ productPerPage, datas }) {
  const [currentPage, setcurrentPage] = useState(1)

  const handleArroyRight = () => {
    setcurrentPage(currentPage + 1)
  }
  const handleArroyLeft = () => {
    setcurrentPage(currentPage - 1)
  }

  const lastProduct = currentPage * productPerPage

  const firstProduct = lastProduct - productPerPage

  const productNow = datas.slice(firstProduct, lastProduct)

  return {
    handleArroyRight,
    handleArroyLeft,
    productNow,
    currentPage,
    setcurrentPage,
    productPerPage
  }
}
