import React from 'react'

export default function Charity() {
  return (
    <div>
      <h1>{this.props.name}</h1>
      <p>{this.props.category}</p>
      <p>{this.props.private_donations}</p>
      <p>{this.props.total_revenue}</p>
      <p>{this.props.fundraising_efficiency}</p>
      <p>{this.props.charitable_commitment}</p>
      <p>{this.props.website}</p>
    </div>
  )
}
