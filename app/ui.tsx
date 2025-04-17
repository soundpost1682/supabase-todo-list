'use client'

import Todo from "components/todo"
import { Button, Input } from "@material-tailwind/react"

export default function UI() {
  return <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
    <h1 className="text-xl">TODO LIST</h1>
    <Input label="Find you TODO" placeholder="Search TODO" icon={<i className="fas fa-search" />} />
    
    <Todo id={1} value={'New TODO'} completed={true}/>
    
    <Button>
      <i className="fas fa-plus mr-2" />
      Add TODO
    </Button>

      </div>}