window.addEventListener("load", () => {
  const submit = document.getElementById("submit");
  const InputValue = document.querySelector(".input_value");
  const Wrapper = document.querySelector(".wrapper");
  const message = document.querySelector(".message");
  const cancel = document.querySelector(".cross");
  const yes = document.querySelector(".yes");
  //   console.log(InputValue);

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let task = InputValue.value;
    // console.log(task);
    if (!task) {
      alert("Please write something");
      return;
    } else {
      const task_el = document.createElement("div");
      const task_el_input = document.createElement("input");
      const actions = document.createElement("div");
      const Edit = document.createElement("button");
      const Delete = document.createElement("button");
      const circle = document.createElement("div");
      task_el.classList.add("tasks");
      task_el_input.classList.add("text");
      task_el_input.setAttribute("type", "text");
      task_el_input.setAttribute("readonly", "readonly");
      task_el.appendChild(task_el_input);
      Wrapper.appendChild(task_el);
      task_el_input.value = task;
      //add circle
      circle.classList.add("circle");
      task_el.appendChild(circle);

      actions.classList.add("actions");
      task_el.appendChild(actions);
      //create button
      Edit.classList.add("edit");
      actions.appendChild(Edit);
      Edit.innerText = "Edit";

      Delete.classList.add("delete");
      actions.appendChild(Delete);
      Delete.innerText = "Delete";

      console.log(task_el);
      InputValue.value = null;

      //done
      //   let Done;
      //   task_el.addEventListener("click", () => {});

      //   console.log(crossF);
      let check = false;
      circle.addEventListener("click", () => {
        if (!check) {
          circle.style.backgroundColor = "gray";
          check = true;
          task_el.style.backgroundColor = "gray";
          task_el_input.style.backgroundColor = "gray";
          task_el_input.value = new Date().toLocaleString();
          actions.removeChild(Edit);
        } else {
            circle.style.backgroundColor = "white";
            task_el.style.backgroundColor = "rgb(65, 63, 63)";
            task_el_input.style.backgroundColor = "rgb(65, 63, 63)";
            actions.appendChild(Edit);
            task_el_input.value = task;
          check = false;
        }

        // circle.style.backgroundColor = "white";
      });

      //delete task
      Delete.addEventListener("click", () => {
        message.style.display = "flex";
        cancel.addEventListener("click", () => {
          message.style.display = "none";
        });
        yes.addEventListener("click", () => {
          Wrapper.removeChild(task_el);
          message.style.display = "none";
        });
      });

      //edit task
      Edit.addEventListener("click", () => {
        // task_el_input.removeAttribute("readonly", "readonly");
        // Edit.innerText = "Save";
        if (Edit.innerText.toLowerCase() == "edit") {
          task_el_input.removeAttribute("readonly", "readonly");
          Edit.innerText = "Save";
          task_el.style.backgroundColor = "white";
          task_el_input.style.backgroundColor = "white";
          task_el_input.style.color = "black";
        } else {
          task_el_input.setAttribute("readonly", "readonly");
          Edit.innerText = "Edit";
          task_el.style.backgroundColor = "rgb(65, 63, 63)";
          task_el_input.style.backgroundColor = "rgb(65, 63, 63)";
          task_el_input.style.color = "white";
        }
      });
    }
  });
});
