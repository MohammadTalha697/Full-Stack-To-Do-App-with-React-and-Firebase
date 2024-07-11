import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col py-2">
            <p className="text-center h6 m-0">Mohammad Talha &copy;{year} All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer