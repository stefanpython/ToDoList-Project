import { displayInputs} from "./modules/UI"
import { projectLogic } from "./modules/app"

// Add hide project and task forms
displayInputs().addTaskButton();
displayInputs().addProjectButton();

projectLogic();