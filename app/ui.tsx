'use client'

import Todo from "components/todo"
import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createTodo, getTodos } from "actions/todo-actions"

export default function UI() {
  const [searchInput, setSearchInput] = useState('')
  const todosQuery = useQuery({
    queryKey : ['todos', searchInput],
    queryFn : ()=>getTodos({searchInput}),
  })
  const createTodoMutation = useMutation({
    mutationFn : ()=> createTodo({
      title : 'New TODO',
      completed : false,
    }),
    onSuccess: ()=>{
      todosQuery.refetch()
    }
  })

  return <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
    <h1 className="text-xl">TODO LIST</h1>
    <Input label="Find you TODO"
    placeholder="Search TODO"
    icon={<i className="fas fa-search" />}
    value={searchInput}
    onChange={(e)=>setSearchInput(e.target.value)}
    />
    
    {todosQuery.isPending && <p>Loading...</p>}
    {todosQuery.data && todosQuery.data.map((todo)=> <Todo key={todo.id} todo={todo}/>)}
    
    <Button 
    onClick={()=>createTodoMutation.mutate()}
    loading={createTodoMutation.isPending}
    >
      <i className="fas fa-plus mr-2" />
      Add TODO
    </Button>

      </div>}