import { CompilerOptions, ScriptTarget, ModuleKind, ModuleResolutionKind } from 'typescript';

const tsconfig: { compilerOptions: CompilerOptions; include: string[]; exclude: string[] } = {
  compilerOptions: {
    target: ScriptTarget.ESNext,      
    module: ModuleKind.ESNext,
    moduleResolution: ModuleResolutionKind.NodeJs,
    lib: ["dom", "esnext"],
    allowSyntheticDefaultImports: true, 
    esModuleInterop: true,
    strict: true, 
    noImplicitAny: true,
    skipLibCheck: true, 
    forceConsistentCasingInFileNames: true, 
    resolveJsonModule: true, 
    isolatedModules: true,  
    declaration: true,   
    declarationDir: "./types", 
    outDir: "./dist",  
    baseUrl: ".", 
    paths: {
      "@/*": ["src/*"]
    }
  },
  include: ["src/**/*", "shims-vue.d.ts"], 
  exclude: ["node_modules", "dist", "**/*.spec.ts"]
};

export = tsconfig;