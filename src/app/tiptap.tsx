"use client";

import {
  useEditor,
  EditorContent,
  Node,
  mergeAttributes,
  JSONContent,
  ReactNodeViewRenderer,
  NodeViewWrapper,
  NodeViewContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Tiptap() {
  return <TiptapInner />;
}

function TiptapInner() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: false,
        codeBlock: false,
        code: false,
        paragraph: {
          HTMLAttributes: { "data-private": "redact", class: "pb-2" },
        },
        bulletList: {
          HTMLAttributes: { class: "list-disc px-8" },
        },
        orderedList: {
          HTMLAttributes: { class: "list-decimal px-8" },
        },
        heading: {
          HTMLAttributes: {
            "data-private": "redact",
            class: "document-heading [&:not(:first-child)]:pt-4 pb-2",
          },
          levels: [1, 2, 3],
        },
      }),
      CustomNode,
    ],
    content: `<p data-private="redact" class="pb-2">Disney: A World of Magic and Imagination</p><p data-private="redact" class="pb-2">When we think of Disney, we are transported to a world of magic, wonder, and imagination. For nearly a century, Disney has enchanted audiences of all ages with its enchanting stories. From its iconic animated films to its theme parks and resorts, Disney continues to be a beloved brand that holds a special place in the hearts of millions around the world.</p><p data-private="redact" class="pb-2">The Walt Disney Company, founded by Walt Disney and Roy O. Disney in 1923, began as a small animation studio in Hollywood. Little did they know that their humble beginnings would pave the way for a global entertainment empire. The release of their first animated feature film, "Snow White and the Seven Dwarfs", in 1937, profoundly influenced the history of animation and set the stage for their future successes.</p><p data-private="redact" class="pb-2">One of the most iconic aspects of Disney is its theme parks. Disneyland, located in Anaheim, California, was the first-ever theme park created by Walt Disney himself. Since its opening in 1955, Disneyland has become a place where dreams come true. The park is divided into different lands, each with its own unique attractions, shows, and experiences. From the enchanting Sleeping Beauty Castle to the thrilling rides like Space Mountain and Pirates of the Caribbean, Disneyland offers something for everyone.</p><p data-private="redact" class="pb-2">Disneyland's success paved the way for the creation of other Disney theme parks around the world. Walt Disney World in Florida, Tokyo Disneyland, Disneyland Paris, Hong Kong Disneyland, and Shanghai Disneyland have all become popular destinations for tourists seeking to immerse themselves in the magic of Disney. These parks not only bring Disney's beloved characters to life but also offer breathtaking shows, parades, and fireworks, creating a truly immersive experience for visitors.</p><p data-private="redact" class="pb-2">Beyond the theme parks, Disney also operates numerous resorts, hotels, and cruise lines that cater to the needs of travelers. Whether you want to stay in a luxurious hotel overlooking Cinderella's Castle or embark on a Disney cruise to explore exotic destinations, Disney ensures that every aspect of your vacation is filled with magic and unparalleled service.</p><p data-private="redact" class="pb-2">In recent years, Disney has embraced the digital age with the launch of its streaming service, Disney+. With a vast library of films, TV shows, and exclusive content, Disney+ has become a go-to platform for Disney enthusiasts to enjoy their favorite movies and shows anytime, anywhere. From classic animations to new releases and original series, Disney+ offers a treasure trove of entertainment for subscribers of all ages.</p><p data-private="redact" class="pb-2">Disney's impact extends beyond entertainment. The company has also been actively involved in philanthropy and corporate social responsibility initiatives. Through its Disney Conservation Fund, Disney has supported numerous environmental projects and initiatives to protect wildlife and conserve natural resources. Additionally, Disney has partnered with organizations around the world to bring joy and happiness to children facing adversity, making a positive difference in their lives.</p><p data-private="redact" class="pb-2">In conclusion, Disney is more than just a brand; it is a symbol of magic, imagination, and dreams coming true. From its iconic animated films to its theme parks, resorts, and digital offerings, Disney continues to captivate audiences around the world. With its commitment to storytelling, innovation, and creating unforgettable experiences, Disney will undoubtedly continue to be a beloved and influential force in the entertainment industry for years to come.</p>`,
  });

  return (
    <div className="flex flex-col gap-6">
      <p>Tiptap Editor</p>
      <div className="flex gap-4 items-start overflow-auto">
        <div>
          <EditorContent editor={editor} />
        </div>
        <button onClick={() => editor?.commands.setCustomNode()}>Click</button>
      </div>
    </div>
  );
}

export const CustomNode = Node.create({
  name: "test",
  content: "block*",
  group: "block",
  marks: "_",
  parseHTML() {
    return [
      {
        tag: "test",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["test", mergeAttributes(HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCustomNode:
        () =>
        ({ chain, state }) => {
          const { content } = state.doc.slice(0, 3500, false);
          const contentJson: JSONContent = {
            type: this.type.name,
            content: content.toJSON() as JSONContent[],
            attrs: {},
          };
          return chain()
            .insertContentAt({ from: 0, to: 3500 }, contentJson, {
              updateSelection: false,
            })
            .focus()
            .run();
        },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(Test);
  },
});

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    test: {
      setCustomNode: () => ReturnType;
    };
  }
}

function Test() {
  return (
    <NodeViewWrapper className="border-emerald-400 border-2">
      {/* <div className="h-8 bg-emerald-400 sticky top-0" /> */}
      <NodeViewContent></NodeViewContent>
    </NodeViewWrapper>
  );
}
