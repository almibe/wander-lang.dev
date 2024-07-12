<script lang="ts">
import { initializeEditor } from "@ligature/ligature-components/src/editor/LigatureEditor"

  setTimeout(() => {
      const element = document.querySelector("#editor")
      initializeEditor({
        element,
        onRun: async (script) => {
          // store.run()
        },
        onChange: (script) => {
          // store.setEditorContent(script)
        }
      })
    }
  )
</script>

<div id="editorWrapper">
  <div id="editor"></div>
</div>
