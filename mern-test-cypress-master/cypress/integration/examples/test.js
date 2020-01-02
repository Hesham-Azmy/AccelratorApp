describe('Navigate to landing page', function(){
  it('opens the Todo App on localhost', function(){
  	cy.visit('http://localhost:3000')
  })

  it('Tests that landing page loaded successfully', function(){
  	cy.contains('Create Todo')
	cy.contains('MERN-Stack Todo App')
  })
})

describe('Create a new data entry', function(){
  it('clicks on create Todo', function(){
  	cy.get(':nth-child(2) > .nav-link').click()
  	})

  it('Test that create data entery page loaded', function(){
   cy.url().should('include','/create')
    })

  it('adding mandatory info', function(){   
   	cy.get(':nth-child(1) > .form-control').type('The last entry')
  	cy.get(':nth-child(2) > .form-control').type('This is my role')  
	cy.get('#priorityHigh').click()
	cy.get('.btn').click()
	})

  it ('Test that record is created', function(){
  	cy.get('#root > div > div > table > tbody > tr').last().should('contain', 'The last entry')
    })

  it ('Test that all fields are mandatory to create a record', function(){
  	cy.get(':nth-child(2) > .nav-link').click()
   	cy.get(':nth-child(1) > .form-control').type(' ')
  	cy.get(':nth-child(2) > .form-control').type(' ')  
	cy.get('.btn').click()
  	cy.url().should('include','/create')
    })
  it ('Test that app logo navigates to home page', function(){
   	cy.get(':nth-child(2) > .nav-link').click()
   	cy.get('.navbar > :nth-child(2)').click()
  	cy.url().should('equal','http://localhost:3000/')
    })
})


describe('Updating a data entry', function(){

	it('clicks on edit button and change the info',function(){
		cy.get(':nth-child(1) > :nth-child(4) > a').click()
		cy.get(':nth-child(1) > .form-control').clear().type('updated entry')
		cy.get(':nth-child(6) > .btn').click()
	})

	it('Marks the entry as complete', function(){
		cy.get(':nth-child(1) > :nth-child(4) > a').click()
		cy.get('#completedCheckbox').click()
		cy.get(':nth-child(6) > .btn').click()
	})
	
	it('Test that the record is updated', function(){
		cy.get('#root > div > div > table > tbody > tr').should('contain', 'updated entry')
	})

	it('Tests that you cant erase mandatory fields',function(){
		
		cy.get(':nth-child(1) > :nth-child(4) > a').click()
		cy.get(':nth-child(1) > .form-control').clear()
		cy.get(':nth-child(2) > .form-control').clear()
		cy.get(':nth-child(6) > .btn').click()
  	    cy.url().should('contain','http://localhost:3000/edit')
	})
})

describe('Deleting a data entry',function(){

	it('Deletes the record', function(){
	cy.get(':nth-child(1) > :nth-child(4) > a').click()

	cy.get(':nth-child(7) > .btn').click()
	
	})
it('Test that the record is Deleted', function(){
		cy.get('#root > div > div > table > tbody > tr').should('not.contain', 'updated entry')
		})
})