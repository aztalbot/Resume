// CLASSES FOR STRUCTURING RESUME DATA
import moment from 'moment'

class Profile {
  constructor (name, address, contact) {
    this.name = name
    this.address = address
    this.contact = contact
  }
}

class Name {
  constructor (first, middle, last) {
    this.first = first
    this.middle = middle
    this.last = last
  }
  get fullName () {
    return [this.first, this.middle, this.last].join(' ')
  }
  get firstLast () {
    return this.first + ' ' + this.last
  }
  get firstInitLast () {
    var initial = this.middle.charAt(0) + '.'
    return [this.first, initial, this.last].join(' ')
  }
}

class Address {
  constructor (line1, location, zip) {
    this.line1 = line1
    this.location = location
    this.zip = zip
  }
  get fullAddress () {
    return this.line1 + ', ' + this.location.fullLocation + ' ' + this.zip
  }
  get cityState () {
    return this.location.fullLocation + ' ' + this.zip
  }
}

class Contact {
  constructor (email, secondaryEmail, phone) {
    this.email = email
    this.secondaryEmail = secondaryEmail
    this.phone = phone
  }
}

class Experience {
  constructor (position, isPartTime, timeFrame, descriptionArr) {
    this.position = position
    this.isPartTime = isPartTime
    this.timeFrame = timeFrame
    this.descriptionArr = descriptionArr
  }
}

class Position {
  constructor (title, employer, location) {
    this.title = title
    this.employer = employer
    this.location = location
  }
}

class Location {
  constructor (city, state) {
    this.city = city
    this.state = state
  }
  get fullLocation () {
    return this.city + ', ' + this.state
  }
}

class Employer {
  constructor (name, link) {
    this.name = name
    this.link = link
  }
}

class TimeFrame {
  constructor (startDate, endDate) {
    this.startDate = startDate
    this.endDate = (endDate === 'Present')
                   ? new PositionDate(parseInt(moment().format('MM')) - 1,
                                      parseInt(moment().format('YYYY')))
                   : endDate
    this.isCurrent = (endDate === 'Present')
  }
  get duration () {
    return moment().diff(this.startDate.date, this.endDate.date)
  }
  get start () {
    return this.startDate.dateString
  }
  get end () {
    return (this.isCurrent) ? 'Present' : this.endDate.dateString
  }
}

class PositionDate {
  constructor (month, year) {
    this.month = month
    this.year = year
  }
  get date () {
    return moment(new Date(this.year, this.month))
  }
  get dateString () {
    return this.date.format('MMM. YYYY')
  }
}

export { Profile, Name, Address, Contact, Experience, Position, Location, Employer, TimeFrame, PositionDate }
